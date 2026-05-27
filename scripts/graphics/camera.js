export class Camera {

  constructor() {

    this.x = 0;
    this.y = 0;

    this.shakePower = 0;

  }

  shake(power = 10) {

    this.shakePower = power;

  }

  update(ctx) {

    if (this.shakePower > 0) {

      const dx =
      (Math.random() - 0.5)
      * this.shakePower;

      const dy =
      (Math.random() - 0.5)
      * this.shakePower;

      ctx.setTransform(
        1,
        0,
        0,
        1,
        dx,
        dy
      );

      this.shakePower *= 0.9;

    } else {

      ctx.setTransform(
        1,
        0,
        0,
        1,
        0,
        0
      );

    }

  }

}