export class GameServer {

  constructor() {

    this.players = [];

    this.rooms = [];

  }

  connect(player) {

    this.players.push(player);

  }

  disconnect(id) {

    this.players =
    this.players.filter(

      p => p.id !== id

    );

  }

}