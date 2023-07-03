const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (client) => {
  client.on("chat", (data) => {
    client.broadcast.emit("chat", data);
  });
  client.on("disconnect", () => {});
});

server.listen(5001);
