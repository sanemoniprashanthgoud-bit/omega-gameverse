export class NPCBrain {

  think(player) {

    return {

      action:
      "follow",

      target:
      player

    };

  }

}