import React, { useContext } from 'react';
import {
    Employee,
    WebSocketConnectorConfiguration,
    WebSocketConnectorContext as WebSocketConnectorContextType,
    WebSocketConnectorProviderProps
} from './types/WebSocketConnector';
import { io, Socket } from 'socket.io-client';


const DefaultConfiguration: WebSocketConnectorConfiguration = {
    protocol: 'ws',
    host: 'localhost',
    port: 3000
};

export class WebSocketConnector {
    _config: WebSocketConnectorConfiguration = DefaultConfiguration;
    _connected: boolean = false;
    _socket: Socket | null = null;
    _employee: Employee | null = null;
    _content: string | null = null;

    constructor(config: Partial<WebSocketConnectorConfiguration> = DefaultConfiguration) {
        this._config = {
            ...DefaultConfiguration,
            ...config
        };

        // Bind functions
        this._connect = this._connect.bind(this);
        this.sendContent = this.sendContent.bind(this);
    }

    _connect() {
        if (!this._connected) {
            const uri = `${this._config.protocol}://${this._config.host}:${this._config.port}`;
            const socket = io(uri, {
                reconnectionDelayMax: 10000,
            });
            socket.connect();

            this._socket = socket;
            this._connected = true;
        }

        if (this._socket != null) {
            // Listen to events
            this._socket.on('employee joined', (data) => {
                this._employee = data.employee;
            });

            this._socket.on('content updated', (data) => {
                this._content = data;
            });

            this._socket.on('disconnect', () => {
                this._employee = null;
                this._content = null;
                this._connected = false;
            });

            this._socket.on('connect_error', (error) => {
                console.error('Could not establish connection to server', error);
            });
        }
    }

    sendContent(content) {
        if (!this._connected) {
            console.error('Error connecting to server');
        }

        if (this._socket != null) {
            this._socket.emit('update content', content);
        }

        return true;
    }

    // Getters
    get isConnected() {
        return this._connected;
    }

    get getEmployee() {
        return this._employee;
    }

    get getContent() {
        return this._content;
    }
}


export const WebSocketConnectorContext = React.createContext<WebSocketConnectorContextType | null>(null);

export const useWebSocketConnector = () => {
    return useContext(WebSocketConnectorContext);
};

export function WebSocketConnectorProvider({ webSocketInstance, children }: WebSocketConnectorProviderProps) {
    webSocketInstance._connect();

    return <WebSocketConnectorContext.Provider value={{ webSocketInstance: webSocketInstance }}>
        {children}
    </WebSocketConnectorContext.Provider>;
}


