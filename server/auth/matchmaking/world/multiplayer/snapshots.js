export class Snapshot {

  static create(world) {

    return {

      timestamp:
      Date.now(),

      players:
      world.players,

      entities:
      world.entities

    };

  }

}