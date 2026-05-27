export class AntiCheat {

  static validateMove(

    player,
    x,
    y

  ) {

    const speed =
    Math.hypot(

      x - player.x,

      y - player.y

    );

    return speed < 50;

  }

}