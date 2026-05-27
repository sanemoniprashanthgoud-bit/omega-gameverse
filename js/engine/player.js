export class Player {

  constructor() {

    this.health = 100;

    this.maxHealth = 100;

    this.level = 1;

    this.xp = 0;

    this.damage = 10;

  }

  takeDamage(amount) {

    this.health -= amount;

    if (this.health < 0) {

      this.health = 0;

    }

  }

  heal(amount) {

    this.health += amount;

    if (
      this.health >
      this.maxHealth
    ) {

      this.health =
      this.maxHealth;

    }

  }

  gainXP(amount) {

    this.xp += amount;

    if (
      this.xp >=
      this.level * 100
    ) {

      this.level++;

      this.xp = 0;

      console.log(
        "LEVEL UP!"
      );

    }

  }

}