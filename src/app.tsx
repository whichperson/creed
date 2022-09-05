import './root.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Desktop from "./containers/Desktop";
import * as WebSocket from './api/socket';


WebSocket.connectSocket();

const container = document.getElementById('app') as HTMLElement;
const root = createRoot(container);

root.render(<Desktop/>);


