import React from 'react';
import {
    WebSocketConnectorContext as WebSocketConnectorContextType,
    WebSocketConnectorProps
} from './types/WebSocketConnector';
import { createWebSocketConfig } from './config/webSocketConfig';

export const WebSocketConnectorContext = React.createContext<WebSocketConnectorContextType | null>(null);

export default function WebSocketConnector({ configuration, children }: WebSocketConnectorProps) {
    const config = createWebSocketConfig(configuration);

    return <WebSocketConnectorContext.Provider value={config}>
        {children}
    </WebSocketConnectorContext.Provider>;
}


