import './root.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Desktop from './containers/Desktop';
import { WebSocketConnector, WebSocketConnectorProvider } from './websocket/websocketconnector';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

const webSocketInstance = new WebSocketConnector();

root.render(<WebSocketConnectorProvider webSocketInstance={webSocketInstance}>
    <Desktop/>
</WebSocketConnectorProvider>);


