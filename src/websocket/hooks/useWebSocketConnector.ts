import React, { useContext } from 'react';
import { WebSocketConnectorContext as WebSocketConnectorContextType } from '../types/WebSocketConnector';


export const useWebSocketConnector = () => {
    const webSocketConnectorContext = React.createContext<WebSocketConnectorContextType | null>(null);
    return useContext(webSocketConnectorContext);
};
