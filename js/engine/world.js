export class World {

  constructor(name) {

    this.name = name;

    this.time = "Day";

  }

  toggleTime() {

    this.time =

    this.time === "Day"
    ? "Night"
    : "Day";

  }

}