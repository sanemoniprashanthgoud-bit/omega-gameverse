export class RenderPipeline {

  constructor(ctx) {

    this.ctx = ctx;

    this.passes = [];

  }

  addPass(pass) {

    this.passes.push(pass);

  }

  render() {

    this.passes.forEach(
      pass => pass(this.ctx)
    );

  }

}