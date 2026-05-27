export class Projectile {

  constructor(x, y, angle) {

    this.x = x;
    this.y = y;

    this.radius = 6;

    this.speed = 12;

    this.dx =
    Math.cos(angle)
    * this.speed;

    this.dy =
    Math.sin(angle)
    * this.speed;

  }

  update() {

    this.x += this.dx;
    this.y += this.dy;

  }

  draw(ctx) {

    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "yellow";

    ctx.shadowBlur = 20;
    ctx.shadowColor = "yellow";

    ctx.fill();

  }

}