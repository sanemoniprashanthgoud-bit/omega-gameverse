export class Room {

  constructor(id) {

    this.id = id;

    this.players = [];

  }

  join(player) {

    this.players.push(player);

  }

  leave(playerId) {

    this.players =
    this.players.filter(

      p => p.id !== playerId

    );

  }

}