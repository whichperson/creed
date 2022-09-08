import './root.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import WebSocketConnector from './websocket/websocketconnector';
import Test from './containers/Test';

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);


root.render(<WebSocketConnector configuration={null}>
    <Test/>


    {/* <Desktop/>*/}
</WebSocketConnector>);


