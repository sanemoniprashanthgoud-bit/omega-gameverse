class Engine {

  constructor(canvasId) {

    this.canvas =
    document.getElementById(canvasId);

    this.ctx =
    this.canvas.getContext("2d");

    this.resize();

    window.addEventListener(
      "resize",
      () => this.resize()
    );

    this.lastTime = 0;

  }

  resize() {

    this.canvas.width =
    window.innerWidth;

    this.canvas.height =
    window.innerHeight;

  }

  clear(alpha = 1) {

    this.ctx.fillStyle =
    `rgba(5,8,22,${alpha})`;

    this.ctx.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );

  }

}