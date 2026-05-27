/* =========================
   Ω CONSCIOUSNESS
========================= */

const OmegaAI = {

  deaths: 0,

  wins: 0,

  rageLevel: 0,

  /* =========================
     PLAYER DIED
  ========================= */

  playerDied() {

    this.deaths++;

    this.rageLevel++;

    const messages = [

      "😭 AGAIN???",

      "💀 this is painful to watch",

      "🧠 your strategy is fascinatingly bad",

      "☠ even gravity is disappointed",

      "🎮 controller fighting back?",

      "👁 ΩMEGA is losing faith",

      "📉 skill levels critical",

      "😭 bro creating new failure techniques"

    ];

    this.say(

      messages[
        Math.floor(
          Math.random()
          * messages.length
        )
      ]

    );

    /* special roast */

    if (this.deaths === 10) {

      cinematicEvent(

        "😭 PLEASE LEARN \
         HOW TO PLAY"

      );

    }

    if (this.deaths === 25) {

      this.say(

        "🪦 honestly impressive"

      );

    }

  },

  /* =========================
     PLAYER WIN
  ========================= */

  playerWon() {

    this.wins++;

    const messages = [

      "🤨 lucky.",

      "⚡ impossible...",

      "👁 ΩMEGA will remember this",

      "😭 probably accidental",

      "🎮 don't get confident",

      "☄ beginner's luck detected"

    ];

    this.say(

      messages[
        Math.floor(
          Math.random()
          * messages.length
        )
      ]

    );

  },

  /* =========================
     GENERIC CHAT
  ========================= */

  say(text) {

    notify(text);

    addChatMessage(

      "ΩMEGA",

      text

    );

  },

  /* =========================
     RANDOM INSULTS
  ========================= */

  randomThought() {

    const thoughts = [

      "💤 gameplay speed: elderly turtle",

      "🎯 aim sponsored by blindness",

      "😭 this level isn't even hard",

      "🧱 walls undefeated",

      "⚠ confidence not backed by skill",

      "👾 NPCs discussing your gameplay",

      "📉 movement quality deteriorating",

      "☠ tactical disaster detected"

    ];

    this.say(

      thoughts[
        Math.floor(
          Math.random()
          * thoughts.length
        )
      ]

    );

  }

};

/* =========================
   RANDOM MOCKERY
========================= */

setInterval(() => {

  OmegaAI.randomThought();

}, 60000);

OmegaAI.playerDied();

OmegaAI.playerWon();

localStorage.setItem(

  "omegaDeaths",

  OmegaAI.deaths

);

const oldDeaths =

localStorage.getItem(
  "omegaDeaths"
);

if (oldDeaths > 30) {

  notify(
    "😭 welcome back, \
     professional loser"
  );

}

notify(
  "🎉 checkpoint reached!"
);

setTimeout(() => {

  notify(
    "😈 SIKE"
  );

}, 2000);

function roastPlayer(name) {

  addChatMessage(

    "ΩMEGA",

    `😭 ${name},
     that gameplay was illegal`

  );

}

if (OmegaAI.deaths >= 15) {

  document.body.classList.add(
    "rage-mode"
  );

  cinematicEvent(

    "☠ ΩMEGA \
     HAS LOST PATIENCE"

  );

}