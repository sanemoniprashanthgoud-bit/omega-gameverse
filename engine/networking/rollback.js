export class Rollback {

  constructor() {

    this.history = [];

  }

  save(state) {

    this.history.push(

      structuredClone(state)

    );

  }

  restore(index) {

    return this.history[index];

  }

}