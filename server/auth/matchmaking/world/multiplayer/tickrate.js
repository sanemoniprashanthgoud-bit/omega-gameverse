export class TickRate {

  constructor(rate = 60) {

    this.rate = rate;

    this.delta =
    1000 / rate;

  }

  start(update) {

    setInterval(() => {

      update();

    }, this.delta);

  }

}