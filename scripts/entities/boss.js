export class Boss {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    this.radius = 80;

    this.health = 500;

    this.speed = 1.5;

  }

  update(player) {

    const dx =
    player.x - this.x;

    const dy =
    player.y - this.y;

    const angle =
    Math.atan2(dy, dx);

    this.x +=
    Math.cos(angle)
    * this.speed;

    this.y +=
    Math.sin(angle)
    * this.speed;

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

    ctx.fillStyle = "purple";

    ctx.shadowBlur = 40;
    ctx.shadowColor = "purple";

    ctx.fill();

  }

}