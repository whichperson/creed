import React from 'react';
import { useWebSocketConnector } from '../websocket/hooks/useWebSocketConnector';

export default function Test() {
    const websocket = useWebSocketConnector();

    console.log(websocket);

    return <h1>test</h1>;
}
