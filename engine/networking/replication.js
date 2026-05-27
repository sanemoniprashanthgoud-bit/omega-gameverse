export class Replication {

  static serialize(entity) {

    return {

      x: entity.x,
      y: entity.y,

      vx: entity.vx,
      vy: entity.vy,

      health:
      entity.health

    };

  }

}