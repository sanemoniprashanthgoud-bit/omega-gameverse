/* =========================
   Ω ROAST SYSTEM
========================= */

const RoastSystem = {

  roasts: [

    "😭 bro jumped into the laser AGAIN",

    "💀 even the NPCs are embarrassed",

    "🧠 skill issue detected",

    "☄ that was NOT part of the plan",

    "🎮 maybe try using your eyes",

    "😭 the wall was clearly there",

    "⚰ speedrun to failure complete",

    "🤖 ΩMEGA expected better",

    "👁 impressive. truly terrible.",

    "🪦 rest in pieces, gamer",

    "😭 bro fighting physics itself",

    "💤 even the enemies got bored",

    "🎯 accuracy: legally questionable",

    "📉 gameplay quality decreasing",

    "🧱 obstacle: 1 | player brain: 0",

    "👾 aliens requested a refund",

    "☠ mission failed successfully",

    "😭 that jump was criminal"

  ],

  roast() {

    const roast =

    this.roasts[
      Math.floor(
        Math.random()
        * this.roasts.length
      )
    ];

    notify(roast);

    addChatMessage(

      "ΩROAST",

      roast

    );

  }

};