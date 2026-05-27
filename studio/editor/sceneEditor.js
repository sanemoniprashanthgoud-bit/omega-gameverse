export class SceneEditor {

  constructor() {

    this.objects = [];

  }

  add(object) {

    this.objects.push(object);

  }

  render(ctx) {

    this.objects.forEach(
      obj => obj.draw(ctx)
    );

  }

}