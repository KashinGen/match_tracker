import { ERROR_API_MESSAGE, SOCKET_URL } from "../const";
import { Match } from "../types";

export const connectWebSocket = (onError: (err: string) => void, onMessage: (data: Match[]) => void) => {
  const socket = new WebSocket(SOCKET_URL);

  socket.onopen = () => {
    console.log('WebSocket connection established');
  };

  socket.onclose = (event) => {
    console.log('WebSocket connection closed:', event.code, event.reason);
  };

      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
        onError(ERROR_API_MESSAGE);
      };
      socket.onmessage = (message) => {
        const data = JSON.parse(message.data);
    
        console.log('WebSocket mess', data);
        onMessage(data.data)
      };

  return socket;
};