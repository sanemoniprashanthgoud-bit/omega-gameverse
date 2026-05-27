/* =========================
   RATE LIMITER
========================= */

const RateLimit = {

  lastAction: 0,

  canPerform(delay = 300) {

    const now = Date.now();

    if (

      now - this.lastAction
      < delay

    ) {

      return false;

    }

    this.lastAction = now;

    return true;

  }

};

if (
  RateLimit.canPerform()
) {

  shootBullet();

}