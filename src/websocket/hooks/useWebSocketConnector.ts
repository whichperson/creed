import { useContext } from 'react';
import { WebSocketConnectorContext } from '../websocketconnector';


export const useWebSocketConnector = () => {
    return useContext(WebSocketConnectorContext);
};
