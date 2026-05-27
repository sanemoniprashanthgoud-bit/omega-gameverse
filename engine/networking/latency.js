export class LatencyMonitor {

  constructor() {

    this.ping = 0;

  }

  update(start) {

    this.ping =
    performance.now()
    - start;

  }

}