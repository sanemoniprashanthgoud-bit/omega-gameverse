Camera.shake(14);

Renderer.flash("red");

Particles.spawn(

  player.x,
  player.y,
  "red"

);

/* =========================
   ENGINE CONNECTION
========================= */

Controls.init();

const saveData =

SaveSystem.load(
  "dash-cube-save"
);

if (saveData) {

  console.log(
    "SAVE LOADED"
  );

}

import { Engine }
from "./engine.js";

import { Player }
from "./player.js";

import { Enemy }
from "./enemy.js";

import { Particle }
from "./particles.js";

import { Camera }
from "./camera.js";

const engine =
new Engine("game");

const ctx = engine.ctx;

/* ====================================
   GAME STATE
==================================== */

let score = 0;

let gameOver = false;

let fps = 0;

/* ====================================
   CAMERA
==================================== */

const camera =
new Camera();

/* ====================================
   PLAYER
==================================== */

const player =
new Player(
  window.innerWidth / 2,
  window.innerHeight / 2
);

/* ====================================
   INPUT
==================================== */

const keys = {};

document.addEventListener(
  "keydown",
  e => {

    keys[e.key] = true;

  }
);

document.addEventListener(
  "keyup",
  e => {

    keys[e.key] = false;

  }
);

/* ====================================
   ENEMIES
==================================== */

const enemies = [];

function spawnEnemy() {

  enemies.push(

    new Enemy(

      Math.random()
      * window.innerWidth,

      Math.random()
      * window.innerHeight

    )

  );

}

setInterval(
  spawnEnemy,
  2000
);

/* ====================================
   PARTICLES
==================================== */

const particles = [];

function createExplosion(x, y) {

  for (let i = 0; i < 20; i++) {

    particles.push(

      new Particle(
        x,
        y,
        "cyan"
      )

    );

  }

}

/* ====================================
   COLLISIONS
==================================== */

function checkCollisions() {

  enemies.forEach(enemy => {

    const dx =
    player.x - enemy.x;

    const dy =
    player.y - enemy.y;

    const distance =
    Math.hypot(dx, dy);

    if (
      distance <
      player.radius +
      enemy.radius
    ) {

      camera.shake(20);

      createExplosion(
        player.x,
        player.y
      );

      gameOver = true;

    }

  });

}

/* ====================================
   UPDATE
==================================== */

function update(delta) {

  if (gameOver) {

    drawGameOver();

    return;

  }

  fps =
  Math.round(1000 / delta);

  engine.clear(0.2);

  camera.update(ctx);

  /* PLAYER */

  player.move(keys);

  player.draw(ctx);

  /* ENEMIES */

  enemies.forEach(enemy => {

    enemy.update(player);

    enemy.draw(ctx);

  });

  /* PARTICLES */

  particles.forEach((particle, index) => {

    particle.update();

    particle.draw(ctx);

    if (particle.life <= 0) {

      particles.splice(index, 1);

    }

  });

  /* COLLISION */

  checkCollisions();

  /* SCORE */

  score++;

  /* HUD */

  drawHUD();

}

/* ====================================
   HUD
==================================== */

function drawHUD() {

  ctx.fillStyle = "white";

  ctx.font =
  "20px Arial";

  ctx.fillText(
    `Score: ${score}`,
    20,
    40
  );

  ctx.fillText(
    `FPS: ${fps}`,
    20,
    70
  );

  ctx.fillText(
    `Enemies: ${enemies.length}`,
    20,
    100
  );

}

/* ====================================
   GAME OVER
==================================== */

function drawGameOver() {

  ctx.fillStyle =
  "rgba(0,0,0,0.6)";

  ctx.fillRect(
    0,
    0,
    engine.canvas.width,
    engine.canvas.height
  );

  ctx.fillStyle = "cyan";

  ctx.font =
  "80px Arial";

  ctx.textAlign = "center";

  ctx.fillText(
    "GAME OVER",
    engine.canvas.width / 2,
    engine.canvas.height / 2
  );

}

/* ====================================
   START GAME LOOP
==================================== */

engine.start(update);

let health = 100;

let xp = 0;

let level = 1;

const projectiles = [];

document.addEventListener(
  "click",
  e => {

    const dx =
    e.clientX - player.x;

    const dy =
    e.clientY - player.y;

    const angle =
    Math.atan2(dy, dx);

    projectiles.push(

      new Projectile(
        player.x,
        player.y,
        angle
      )

    );

  }
);

projectiles.forEach(projectile => {

  projectile.update();

  projectile.draw(ctx);

});

projectiles.forEach((p, pIndex) => {

  enemies.forEach((enemy, eIndex) => {

    const dx =
    p.x - enemy.x;

    const dy =
    p.y - enemy.y;

    const dist =
    Math.hypot(dx, dy);

    if (
      dist <
      p.radius +
      enemy.radius
    ) {

      enemies.splice(eIndex, 1);

      projectiles.splice(pIndex, 1);

      score += 100;

      xp += 10;

    }

  });

});

if (xp >= level * 100) {

  level++;

  xp = 0;

  player.radius += 2;

}

let boss = null;

setTimeout(() => {

  boss = new Boss(
    window.innerWidth / 2,
    -200
  );

}, 30000);

if (boss) {

  boss.update(player);

  boss.draw(ctx);

}

ctx.fillText(
  `Health: ${health}`,
  20,
  40
);

ctx.fillText(
  `XP: ${xp}`,
  20,
  70
);

ctx.fillText(
  `Level: ${level}`,
  20,
  100
);

ctx.fillText(
  `Score: ${score}`,
  20,
  130
);

function damageFlash() {

  ctx.fillStyle =
  "rgba(255,0,0,0.15)";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

}

function drawMinimap() {

  ctx.fillStyle =
  "rgba(255,255,255,0.1)";

  ctx.fillRect(
    canvas.width - 210,
    10,
    200,
    200
  );

  ctx.fillStyle = "cyan";

  ctx.fillRect(
    canvas.width - 110,
    100,
    6,
    6
  );

}

let wave = 1;

function nextWave() {

  wave++;

  for (let i = 0; i < wave * 3; i++) {

    spawnEnemy();

  }

}

const achievements = [];

function unlock(name) {

  achievements.push(name);

  console.log(
    "Achievement unlocked:",
    name
  );

}

function recoil(player, angle) {

  player.x -=
  Math.cos(angle) * 5;

  player.y -=
  Math.sin(angle) * 5;

}

particles.push({

  x: player.x,
  y: player.y,

  dx:
  (Math.random() - 0.5) * 8,

  dy:
  (Math.random() - 0.5) * 8,

  life: 100

});

client.send(

  "PLAYER_MOVE",

  {

    x: player.x,
    y: player.y

  }

);

remotePlayers.forEach(p => {

  ctx.fillStyle =
  "orange";

  ctx.beginPath();

  ctx.arc(
    p.x,
    p.y,
    20,
    0,
    Math.PI * 2
  );

  ctx.fill();

});

import { Player }
from "./engine/player.js";

import { Enemy }
from "./engine/enemy.js";

import { attackEnemy }
from "./engine/combat.js";

const hero =
new Player();

const slime =
new Enemy(
  "Slime",
  30,
  5
);

attackEnemy(
  hero,
  slime
);

let lastTime = 0;

function gameLoop(time = 0) {

  const delta =

    (time - lastTime)
    / 16.67;

  lastTime = time;

  update(delta);

  render();

  requestAnimationFrame(
    gameLoop
  );

}

gameLoop();