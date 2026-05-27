export class Rigidbody {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    this.vx = 0;
    this.vy = 0;

    this.mass = 1;

    this.friction = 0.9;

  }

  update() {

    this.x += this.vx;

    this.y += this.vy;

    this.vx *= this.friction;
    this.vy *= this.friction;

  }

}