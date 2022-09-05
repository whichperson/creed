import { io } from 'socket.io-client';

export function connectSocket() {
    const socket = io('ws://localhost:3000');

    socket.connect();
}
