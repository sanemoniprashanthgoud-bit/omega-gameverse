export class SpriteAtlas {

  constructor(image) {

    this.image = image;

    this.sprites = {};

  }

  define(
    name,
    x,
    y,
    w,
    h
  ) {

    this.sprites[name] = {
      x, y, w, h
    };

  }

}