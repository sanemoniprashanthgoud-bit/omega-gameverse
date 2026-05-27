export class Profiler {

  constructor() {

    this.frames = 0;

    this.fps = 0;

    this.last = performance.now();

  }

  update() {

    this.frames++;

    const now =
    performance.now();

    if (now - this.last >= 1000) {

      this.fps = this.frames;

      this.frames = 0;

      this.last = now;

    }

  }

}