import './root.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Desktop from './containers/Desktop';
import WebSocketConnector from './websocket/websocketconnector';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);


root.render(<WebSocketConnector configuration={null}>
    <h1>Testing new config</h1>


    {/* <Desktop/>*/}
</WebSocketConnector>);


