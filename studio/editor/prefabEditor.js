export class Prefab {

  constructor(data) {

    this.data = data;

  }

  instantiate() {

    return structuredClone(
      this.data
    );

  }

}