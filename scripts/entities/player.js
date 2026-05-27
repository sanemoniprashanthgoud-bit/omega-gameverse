export class Player {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    this.radius = 25;

    this.speed = 6;

    this.color = "cyan";

  }

  move(keys) {

    if (keys["w"])
      this.y -= this.speed;

    if (keys["s"])
      this.y += this.speed;

    if (keys["a"])
      this.x -= this.speed;

    if (keys["d"])
      this.x += this.speed;

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

    ctx.fillStyle =
    this.color;

    ctx.shadowBlur = 30;
    ctx.shadowColor =
    this.color;

    ctx.fill();

  }

}