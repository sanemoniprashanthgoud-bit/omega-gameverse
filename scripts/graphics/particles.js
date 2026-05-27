export class Particle {

  constructor(x, y, color) {

    this.x = x;
    this.y = y;

    this.size =
    Math.random() * 5 + 2;

    this.speedX =
    (Math.random() - 0.5) * 6;

    this.speedY =
    (Math.random() - 0.5) * 6;

    this.life = 100;

    this.color = color;

  }

  update() {

    this.x += this.speedX;

    this.y += this.speedY;

    this.life--;

  }

  draw(ctx) {

    ctx.globalAlpha =
    this.life / 100;

    ctx.fillStyle =
    this.color;

    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.size,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.globalAlpha = 1;

  }

}