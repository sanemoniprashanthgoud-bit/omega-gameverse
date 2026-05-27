export class Heatmap {

  constructor() {

    this.points = [];

  }

  track(x, y) {

    this.points.push({ x, y });

  }

}