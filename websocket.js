const socket = new WebSocket("wss://your-websocket-server.com");

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  console.log("Notification: ", message);
};

export default socket;
