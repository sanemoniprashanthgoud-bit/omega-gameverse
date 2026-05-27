/* =========================
   Ω SAVE SYSTEM
========================= */

const OmegaSave = {

  data: {

    username: "Player",

    level: 1,

    xp: 0,

    achievements: [],

    settings: {

      music: true,

      particles: true,

      difficulty: "normal"

    }

  },

  init() {

    const save =

      localStorage.getItem(
        "omegaSave"
      );

    if (save) {

      this.data =
      JSON.parse(save);

      console.log(
        "💾 SAVE LOADED"
      );

    } else {

      this.save();

    }

  },

  save() {

    localStorage.setItem(

      "omegaSave",

      JSON.stringify(
        this.data
      )

    );

    console.log(
      "💾 GAME SAVED"
    );

  },

  reset() {

    localStorage.removeItem(
      "omegaSave"
    );

    location.reload();

  },

  addXP(amount) {

    this.data.xp += amount;

    if (
      this.data.xp >= 100
    ) {

      this.data.level++;

      this.data.xp = 0;

      Achievements.unlock(

        "LEVEL UP",

        `Reached level ${this.data.level}`

      );

    }

    this.save();

  },

  unlockAchievement(name) {

    if (
      this.data.achievements
      .includes(name)
    ) return;

    this.data.achievements
    .push(name);

    this.save();

  }

};

window.addEventListener(

  "load",

  () => {

    OmegaSave.init();

  }

);