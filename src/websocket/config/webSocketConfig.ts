import { WebSocketConnectorConfiguration } from '../types/WebSocketConnector';

const DEFAULT_CONFIG: WebSocketConnectorConfiguration = {
    protocol: 'ws',
    host: 'localhost',
    port: 3000
};


export const createWebSocketConfig = (configObject) => {
    return {
        ...DEFAULT_CONFIG,
        ...configObject
    };
};
