const BossEngine = {

  bosses: [],

  spawn(name, hp) {

    this.bosses.push({

      name,
      hp

    });

    console.log(
      "👁 Boss spawned:",
      name
    );

  }

};