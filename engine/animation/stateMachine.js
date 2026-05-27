export class StateMachine {

  constructor(initial) {

    this.state = initial;

  }

  change(state) {

    this.state = state;

  }

}