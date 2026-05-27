const Controls = {

  keys: {},

  init() {

    addEventListener(

      "keydown",

      e => {

        this.keys[e.code] = true;

      }

    );

    addEventListener(

      "keyup",

      e => {

        this.keys[e.code] = false;

      }

    );

  }

};