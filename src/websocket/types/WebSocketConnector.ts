import React from 'react';
import WebSocketConnector from '../websocketconnector';


export type WebSocketConnectorConfiguration = {
    protocol: string
    host: string
    port: number
}

export type WebSocketConnectorContext = {
    webSocketInstance: typeof WebSocketConnector,
}


export type WebSocketConnectorProps = {
    configuration: WebSocketConnectorConfiguration | null,
    children: React.ReactNode
}

export type Employee = {
    id: string,
    name: string,
    surname: string
}
