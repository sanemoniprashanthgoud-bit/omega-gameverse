export class Loader {

  static loadImage(src) {

    return new Promise(resolve => {

      const img = new Image();

      img.src = src;

      img.onload =
      () => resolve(img);

    });

  }

}