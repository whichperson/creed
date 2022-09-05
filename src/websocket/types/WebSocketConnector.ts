import React from 'react';
import { WebSocketConnector } from '../websocketconnector';


export type WebSocketConnectorConfiguration = {
    protocol: string
    host: string
    port: number
}

export type WebSocketConnectorContext = {
    webSocketInstance: WebSocketConnector,
}


export type WebSocketConnectorProviderProps = {
    webSocketInstance: WebSocketConnector,
    children: React.ReactNode
}

export type Employee = {
    id: string,
    name: string,
    surname: string
}
