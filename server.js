
import express from "express";
import { createServer } from "http";
import MerlMovieSDK from "merlmovie-sdk";
import { WebSocketServer } from "ws";

const app = express();
const port = process.env.PORT || 3000;

const server = createServer(app);

const WSS = new WebSocketServer({
  server,
  path: "/ws"
});

const sdk = new MerlMovieSDK({ WSS });

sdk.handle({
  async onStream(data, controller, request) {
    console.log("Stream request received");

    // Temporary test: no movie source added yet.
    controller.failed();
  },

  onConnection(ws, request) {
    console.log("MerlMovie client connected");
  },

  onListening() {
    console.log("MerlMovie WebSocket is listening");
  }
});

app.get("/", (req, res) => {
  res.send("MerlMovie server is running.");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});

