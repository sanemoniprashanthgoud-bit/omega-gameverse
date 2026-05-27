const socket = io();

const players = {};

socket.on("players", data => {

  Object.assign(players, data);

  renderPlayers();

});

function renderPlayers() {

  document
    .querySelectorAll(".online-player")
    .forEach(player => player.remove());

  for (const id in players) {

    const player = players[id];

    const div = document.createElement("div");

    div.className = "online-player";

    div.style.left = player.x + "px";

    div.style.top = player.y + "px";

    document.body.appendChild(div);

  }

}

document.addEventListener(

  "mousemove",

  e => {

    socket.emit("move", {

      x: e.clientX,

      y: e.clientY

    });

  }

);