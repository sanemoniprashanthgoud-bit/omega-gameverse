export class Enemy {

  constructor(name, hp, damage) {

    this.name = name;

    this.hp = hp;

    this.damage = damage;

  }

  attack(player) {

    player.takeDamage(
      this.damage
    );

  }

}