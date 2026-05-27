const express = require("express");

const http = require("http");

const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

const io = new Server(server);

const players = {};

app.use(express.static(__dirname));

io.on("connection", socket => {

  console.log("🔥 Player joined:", socket.id);

  players[socket.id] = {

    x: 100,

    y: 100

  };

  io.emit("players", players);

  socket.on("move", data => {

    players[socket.id] = data;

    io.emit("players", players);

  });

  socket.on("disconnect", () => {

    delete players[socket.id];

    io.emit("players", players);

  });

});

server.listen(3000, () => {

  console.log("🚀 Ω SERVER ONLINE");

});