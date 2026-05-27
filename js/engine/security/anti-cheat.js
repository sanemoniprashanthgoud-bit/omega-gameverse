/* =========================
   BASIC ANTI CHEAT
========================= */

const AntiCheat = {

  maxCoins: 99999,

  validatePlayer(player) {

    if (player.coins > this.maxCoins) {

      console.warn(
        "🚨 coin tampering detected"
      );

      player.coins =
      this.maxCoins;

    }

    if (player.hp > 100) {

      player.hp = 100;

    }

  }

};