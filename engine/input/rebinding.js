export class InputMap {

  constructor() {

    this.bindings = {

      moveUp: "w",

      moveDown: "s",

      moveLeft: "a",

      moveRight: "d"

    };

  }

  rebind(action, key) {

    this.bindings[action] =
    key;

  }

}