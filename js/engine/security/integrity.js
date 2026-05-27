/* =========================
   GAME INTEGRITY
========================= */

const Integrity = {

  originalScore: 0,

  check(score) {

    if (

      score >
      this.originalScore + 5000

    ) {

      console.warn(
        "🚨 suspicious score jump"
      );

      location.reload();

    }

    this.originalScore = score;

  }

};