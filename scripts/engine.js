const canvas =
  document.getElementById(
    "gameCanvas"
  );

const ctx =
  canvas.getContext("2d");

function resize() {

  canvas.width =
    innerWidth;

  canvas.height =
    innerHeight;

}

resize();

addEventListener(
  "resize",
  resize
);

/* Keyboard */

const keys = {};

addEventListener(

  "keydown",

  e => {

    keys[e.key.toLowerCase()] = true;

  }

);

addEventListener(

  "keyup",

  e => {

    keys[e.key.toLowerCase()] = false;

  }

);

/* Collision */

function rectsCollide(a, b) {

  return (

    a.x < b.x + b.width &&

    a.x + a.width > b.x &&

    a.y < b.y + b.height &&

    a.y + a.height > b.y

  );

}

/* Particles */

const particles = [];

function spawnParticle(x, y, color) {

  particles.push({

    x,
    y,

    vx:
      Math.random()*6 - 3,

    vy:
      Math.random()*6 - 3,

    size:
      Math.random()*6 + 2,

    alpha: 1,

    color

  });

}

function updateParticles() {

  particles.forEach((p, i) => {

    p.x += p.vx;

    p.y += p.vy;

    p.alpha -= 0.02;

    ctx.globalAlpha =
      p.alpha;

    ctx.fillStyle =
      p.color;

    ctx.fillRect(

      p.x,
      p.y,

      p.size,
      p.size

    );

    ctx.globalAlpha = 1;

    if (p.alpha <= 0) {

      particles.splice(i,1);

    }

  });

}
class Engine {

  constructor(canvasId) {

    this.canvas =
    document.getElementById(canvasId);

    this.ctx =
    this.canvas.getContext("2d");

    this.resize();

    window.addEventListener(
      "resize",
      () => this.resize()
    );

    this.lastTime = 0;

  }

  resize() {

    this.canvas.width =
    window.innerWidth;

    this.canvas.height =
    window.innerHeight;

  }

  clear(alpha = 1) {

    this.ctx.fillStyle =
    `rgba(5,8,22,${alpha})`;

    this.ctx.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

  }

}