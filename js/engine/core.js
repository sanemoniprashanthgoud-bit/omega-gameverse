class OmegaEngine {

  constructor() {

    this.delta = 0;

    this.lastTime = 0;

    this.running = true;

    this.update();

  }

  update(time = 0) {

    this.delta =
    time - this.lastTime;

    this.lastTime = time;

    if (this.running) {

      Renderer.render();

      Physics.update();

      Particles.update();

    }

    requestAnimationFrame(

      this.update.bind(this)

    );

  }

}

const Engine =
new OmegaEngine();