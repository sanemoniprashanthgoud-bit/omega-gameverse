export class Entity {

  constructor() {

    this.components = {};

  }

  add(name, component) {

    this.components[name] =
    component;

  }

  get(name) {

    return this.components[name];

  }

}