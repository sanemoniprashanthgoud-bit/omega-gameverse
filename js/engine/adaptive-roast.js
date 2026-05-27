/* =========================
   Ω ADAPTIVE ROAST AI
========================= */

const AdaptiveRoast = {

  jumps: 0,

  deaths: 0,

  misses: 0,

  panicMoves: 0,

  startTime: Date.now(),

  /* =========================
     TRACK JUMPS
  ========================= */

  jump() {

    this.jumps++;

    if (this.jumps > 50) {

      this.say(

        "🦘 calm down kangaroo"

      );

    }

  },

  /* =========================
     TRACK MISSES
  ========================= */

  missedShot() {

    this.misses++;

    if (this.misses > 10) {

      this.say(

        "🎯 crosshair optional apparently"

      );

    }

    if (this.misses > 25) {

      this.say(

        "😭 bro shooting air molecules"

      );

    }

  },

  /* =========================
     TRACK PANIC
  ========================= */

  panic() {

    this.panicMoves++;

    if (this.panicMoves > 20) {

      this.say(

        "⚠ panic detected"

      );

    }

  },

  /* =========================
     PLAYER DEATH
  ========================= */

  death() {

    this.deaths++;

    const roasts = [

      "💀 incredible failure mechanics",

      "🧠 strategy generated randomly",

      "☠ movement sponsored by confusion",

      "😭 that enemy barely tried",

      "🎮 maybe the tutorial was right"

    ];

    this.say(

      roasts[
        Math.floor(
          Math.random()
          * roasts.length
        )
      ]

    );

  },

  /* =========================
     SESSION ANALYSIS
  ========================= */

  analyzePlayer() {

    const playTime =

      Math.floor(

        (Date.now()
        - this.startTime)

        / 60000

      );

    if (playTime > 20) {

      this.say(

        "💤 you've been losing \
         for 20 minutes"

      );

    }

    if (this.deaths > 30) {

      this.say(

        "🪦 honestly this is art"

      );

    }

    if (
      this.misses > 40 &&
      this.deaths > 15
    ) {

      this.say(

        "😭 aim + movement both gone"

      );

    }

  },

  /* =========================
     CHAT
  ========================= */

  say(text) {

    notify(text);

    addChatMessage(

      "ΩAI",

      text

    );

  }

};

/* =========================
   AUTO ANALYSIS
========================= */

setInterval(() => {

  AdaptiveRoast.analyzePlayer();

}, 120000);

AdaptiveRoast.jump();

AdaptiveRoast.missedShot();

AdaptiveRoast.panic();

AdaptiveRoast.death();

if (engine.fps < 20) {

  notify(
    "🔥 PC fighting for survival"
  );

}

if (playerNotMoving) {

  notify(
    "🪨 hiding won't help"
  );

}

window.addEventListener(

  "beforeunload",

  () => {

    localStorage.setItem(

      "rageQuit",

      true

    );

  }

);

if (

  localStorage.getItem(
    "rageQuit"
  )

) {

  notify(
    "😭 rage quit detected"
  );

}

setTimeout(() => {

  cinematicEvent(

    "👁 ΩMEGA \
     IS WATCHING"

  );

}, 900000);

if (AdaptiveRoast.deaths > 50) {

  document.title =

    "professional failure simulator";

}