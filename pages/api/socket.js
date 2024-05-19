import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket already running");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
        console.log(socket);
      console.log("Server is connected");
    });
  }
  res.end(); // dealing with apis,so as to tell client this api has finished.
};

export default SocketHandler;
