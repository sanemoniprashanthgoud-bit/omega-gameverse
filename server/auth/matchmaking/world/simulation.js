export class Simulation {

  constructor() {

    this.players = [];

    this.entities = [];

  }

  update() {

    this.players.forEach(player => {

      player.update();

    });

    this.entities.forEach(entity => {

      entity.update();

    });

  }

}