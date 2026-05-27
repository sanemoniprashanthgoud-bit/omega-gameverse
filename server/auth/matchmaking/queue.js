export class MatchQueue {

  constructor() {

    this.players = [];

  }

  join(player) {

    this.players.push(player);

  }

  match() {

    if (
      this.players.length >= 2
    ) {

      return this.players.splice(
        0,
        2
      );

    }

  }

}