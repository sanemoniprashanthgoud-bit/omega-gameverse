/* =========================
   ELEMENTS
========================= */

const pet =
document.getElementById("pet");

const petSpeech =
document.getElementById("petSpeech");

/* =========================
   STATE
========================= */

let petXP = 0;

let petLevel = 1;

let notifications = 0;

/* =========================
   PET FORMS
========================= */

const petForms = [

  "🦝",
  "🧙",
  "🐉",
  "🌌"

];

/* =========================
   PET LINES
========================= */

const petLines = [

  "Systems stable 😎",

  "Hydration check 💧",

  "Reality integrity holding.",

  "Mission tracking active.",

  "Cosmic energy rising.",

  "You opened the launcher again. Respect.",

  "Your enemies fear good UI design.",

  "The pet demands snacks.",

  "Somewhere... a bug is hiding 👀",

  "Legendary gamer detected.",

  "Your coding power increased +5",

  "Achievement unlocked: Opened launcher 47 times",

  "Tiny wizard status: ACTIVE 🧙",

  "I accidentally cast chaos magic again.",

  "This launcher has too much power 😭",

  "The particles are partying again.",

  "Current FPS: emotionally stable",

  "Your projects are evolving.",

  "Reminder: save before disaster strikes.",

  "The pet believes in you.",

  "Magic levels critical ✨",

  "The UI glow is becoming sentient.",

  "One more upgrade won't hurt 😭",

  "This launcher feels illegal.",

  "WARNING: too much style detected.",

  "You are now 2% cooler.",

  "The cosmic ducks are watching.",

  "Pet status: dramatic",

  "No bugs detected... probably.",

  "Launching awesome mode 🚀"

];

/* =========================
   RANDOM SPEECH
========================= */

function randomPetSpeech() {

  const line =

  petLines[
    Math.floor(
      Math.random()
      * petLines.length
    )
  ];

  petSpeech.innerText =
  line;

  petSpeech.style.opacity = 1;

  setTimeout(() => {

    petSpeech.style.opacity = 0;

  }, 4000);

}

setInterval(
  randomPetSpeech,
  15000
);

/* =========================
   PET LEVELING
========================= */

function gainXP(amount) {

  petXP += amount;

  updatePetUI();

  if (
    petXP >=
    petLevel * 100
  ) {

    petXP = 0;

    petLevel++;

    petLevelUp();

  }

}

function petLevelUp() {

  notify(

    `Pet reached level ${petLevel}`

  );

  document.body.classList.add(
    "rainbow"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "rainbow"
    );

  }, 4000);

  setPetForm();

}

function setPetForm() {

  if (petLevel >= 1) {

    pet.innerHTML =
    petForms[0];

  }

  if (petLevel >= 3) {

    pet.innerHTML =
    petForms[1];

  }

  if (petLevel >= 5) {

    pet.innerHTML =
    petForms[2];

  }

  if (petLevel >= 7) {

    pet.innerHTML =
    petForms[3];

  }

}

/* =========================
   PET UI
========================= */

function updatePetUI() {

  const levelText =

  document.getElementById(
    "petLevelText"
  );

  const xpFill =

  document.getElementById(
    "xpFill"
  );

  if (levelText) {

    levelText.innerText =

    `Level ${petLevel}`;

  }

  if (xpFill) {

    xpFill.style.width =

    `${

      (petXP /
      (petLevel * 100))

      * 100

    }%`;

  }

}

/* =========================
   MAGIC SPELLS
========================= */

function castSpell(type) {

  const rect =
  pet.getBoundingClientRect();

  const spell =
  document.createElement("div");

  spell.className =
  "spell";

  spell.style.left =
  rect.left + 30 + "px";

  spell.style.top =
  rect.top + 30 + "px";

  if (type === "fire") {

    spell.style.background =
    "orange";

  }

  if (type === "ice") {

    spell.style.background =
    "cyan";

  }

  if (type === "chaos") {

    spell.style.background =
    "magenta";

  }

  document.body.appendChild(
    spell
  );

  setTimeout(() => {

    spell.remove();

  }, 1000);

}

/* =========================
   PET CLICK
========================= */

pet.addEventListener(
  "click",
  () => {

    const magic = [

      "fire",
      "ice",
      "chaos"

    ];

    const randomMagic =

    magic[
      Math.floor(
        Math.random()
        * magic.length
      )
    ];

    castSpell(randomMagic);

    gainXP(10);

    notify(
      "Pet used magic ✨"
    );

  }
);

/* =========================
   NOTIFICATIONS
========================= */

function notify(text) {

  const note =
  document.createElement("div");

  note.className =
  "notification";

  note.innerText =
  text;

  document.body.appendChild(
    note
  );

  notifications++;

  setTimeout(() => {

    note.remove();

  }, 3500);

}

/* =========================
   DRAGGABLE WINDOWS
========================= */

const windows =

document.querySelectorAll(
  ".app-window"
);

windows.forEach(win => {

  const topbar =

  win.querySelector(
    ".app-topbar"
  );

  let dragging = false;

  let offsetX = 0;

  let offsetY = 0;

  topbar.addEventListener(
    "mousedown",
    e => {

      dragging = true;

      offsetX =
      e.clientX -
      win.offsetLeft;

      offsetY =
      e.clientY -
      win.offsetTop;

    }
  );

  document.addEventListener(
    "mousemove",
    e => {

      if (!dragging) return;

      win.style.left =

      e.clientX -
      offsetX + "px";

      win.style.top =

      e.clientY -
      offsetY + "px";

    }
  );

  document.addEventListener(
    "mouseup",
    () => {

      dragging = false;

    }
  );

});

/* =========================
   WINDOW OPEN
========================= */

function openWindow(id) {

  const win =

  document.getElementById(id);

  win.style.display =
  "block";

  notify(
    `${id} opened`
  );

}

function closeWindow(id) {

  const win =

  document.getElementById(id);

  win.style.display =
  "none";

}

/* =========================
   CLOCK
========================= */

function updateClock() {

  const clock =

  document.getElementById(
    "clock"
  );

  if (!clock) return;

  const now =
  new Date();

  clock.innerText =

  now.toLocaleTimeString();

}

setInterval(
  updateClock,
  1000
);

/* =========================
   PARTICLES
========================= */

function createParticles() {

  const bg =

  document.querySelector(
    ".floating-bg"
  );

  if (!bg) return;

  for (
    let i = 0;
    i < 50;
    i++
  ) {

    const particle =
    document.createElement(
      "span"
    );

    particle.style.left =

      Math.random()
      * 100 + "%";

    particle.style.animationDuration =

      5 +
      Math.random() * 10
      + "s";

    particle.style.opacity =

      Math.random();

    bg.appendChild(
      particle
    );

  }

}

createParticles();

/* =========================
   KEYBOARD SHORTCUTS
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "1") {

      openWindow("gamesWindow");

    }

    if (e.key === "2") {

      openWindow("settingsWindow");

    }

    if (e.key === "Escape") {

      document
      .querySelectorAll(
        ".app-window"
      )
      .forEach(win => {

        win.style.display =
        "none";

      });

    }

  }
);

shutdown
"☠ nice try",

multiverse
"🌌 portals stabilizing",

creator
"👁 creator detected",

rage
"😭 skill issue confirmed"

/* =========================
   COSMIC EVENTS
========================= */

setInterval(() => {

  if (
    Math.random() < 0.15
  ) {

    document.body.classList.add(
      "rainbow"
    );

    notify(
      "Cosmic anomaly detected 🌌"
    );

    setTimeout(() => {

      document.body.classList.remove(
        "rainbow"
      );

    }, 5000);

  }

}, 30000);

/* =========================
   STARTUP
========================= */

setPetForm();

updatePetUI();

notify(
  "GAMEVERSE initialized 🚀"
);

/* =========================
   FUNNY SYSTEM MESSAGES
========================= */

const systemLines = [

  "Bro clicked the launcher again 😭",

  "Your GPU just sighed dramatically.",

  "99% coding. 1% understanding the bug.",

  "The launcher survived another session.",

  "Somewhere, a semicolon is missing.",

  "Breaking news: UI too powerful.",

  "The FPS fears this launcher.",

  "Warning: gamer energy overload.",

  "That one bug is still hiding.",

  "You fixed one bug and created seven more.",

  "The code is held together by hope.",

  "Speedrunning productivity... unsuccessfully.",

  "Achievement unlocked: touched grass accidentally.",

  "The launcher now runs on chaos.",

  "Your keyboard deserves a vacation.",

  "Critical damage dealt to motivation.",

  "This UI costs 0 dollars and 900 years.",

  "The particles are unionizing.",

  "You opened VS Code for 2 minutes and customized for 5 hours.",

  "The launcher became self-aware 😭",

  "No thoughts. Only upgrades.",

  "Professional overthinker detected.",

  "Your RAM is requesting mercy.",

  "The animations have animations.",

  "Mission objective: survive JavaScript.",

  "You came for coding and stayed for glowing buttons.",

  "Legend says the bugs get stronger at night.",

  "Too much drip detected in launcher.",

  "The UI is illegally smooth.",

  "Current status: pretending to know what the error means."

];

/* =========================
   RANDOM SYSTEM EVENTS
========================= */

function randomSystemMessage() {

  const text =

  systemLines[
    Math.floor(
      Math.random()
      * systemLines.length
    )
  ];

  notify(text);

}

/* random messages */

setInterval(() => {

  if (Math.random() < 0.7) {

    randomSystemMessage();

  }

}, 25000);

/* =========================
   XP + RANK SYSTEM
========================= */

let launcherXP = 0;

let launcherRank = "Beginner";

function gainLauncherXP(amount) {

  launcherXP += amount;

  updateRank();

}

function updateRank() {

  if (launcherXP >= 100) {

    launcherRank = "Coder";

  }

  if (launcherXP >= 250) {

    launcherRank = "Hacker";

  }

  if (launcherXP >= 500) {

    launcherRank = "Reality Bender";

  }

  const rankText =

  document.getElementById(
    "rankText"
  );

  if (rankText) {

    rankText.innerText =

    launcherRank;

  }

}

/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
document.createElement("div");

cursorGlow.id =
"cursorGlow";

document.body.appendChild(
  cursorGlow
);

document.addEventListener(
  "mousemove",
  e => {

    cursorGlow.style.left =
    e.clientX + "px";

    cursorGlow.style.top =
    e.clientY + "px";

  }
);

/* =========================
   PARTICLE BURSTS
========================= */

function burstParticles(x, y) {

  for (let i = 0; i < 12; i++) {

    const p =
    document.createElement("div");

    p.className =
    "burst-particle";

    p.style.left =
    x + "px";

    p.style.top =
    y + "px";

    p.style.background =

      `hsl(${
        Math.random() * 360
      },100%,60%)`;

    document.body.appendChild(p);

    const angle =
    Math.random() * 360;

    const distance =
    60 + Math.random() * 60;

    p.animate(

      [

        {

          transform:
          "translate(0,0) scale(1)",

          opacity: 1

        },

        {

          transform:

          `translate(

            ${
              Math.cos(angle)
              * distance
            }px,

            ${
              Math.sin(angle)
              * distance
            }px

          ) scale(0)`,

          opacity: 0

        }

      ],

      {

        duration:
        1000,

        easing:
        "ease-out"

      }

    );

    setTimeout(() => {

      p.remove();

    }, 1000);

  }

}

/* click burst */

document.addEventListener(
  "click",
  e => {

    burstParticles(
      e.clientX,
      e.clientY
    );

    gainLauncherXP(5);

  }
);

/* =========================
   MATRIX MODE
========================= */

let matrixEnabled = false;

function toggleMatrixMode() {

  matrixEnabled =
  !matrixEnabled;

  document.body.classList.toggle(
    "matrix-mode"
  );

  notify(

    matrixEnabled

    ? "Matrix mode enabled 😎"

    : "Matrix mode disabled"

  );

}

/* keyboard shortcut */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "m") {

      toggleMatrixMode();

    }

  }
);

/* =========================
   BOOT SEQUENCE
========================= */

function bootSequence() {

  const lines = [

    "Initializing GAMEVERSE...",

    "Loading systems...",

    "Connecting particles...",

    "Calibrating chaos engine...",

    "Launching interface...",

    "Welcome back, legend 🚀"

  ];

  let i = 0;

  const interval = setInterval(() => {

    notify(lines[i]);

    i++;

    if (i >= lines.length) {

      clearInterval(interval);

    }

  }, 1200);

}

bootSequence();

/* =========================
   SECRET CHAOS EVENT
========================= */

setInterval(() => {

  if (Math.random() < 0.1) {

    document.body.classList.add(
      "shake"
    );

    notify(
      "CHAOS EVENT ACTIVATED 😭"
    );

    setTimeout(() => {

      document.body.classList.remove(
        "shake"
      );

    }, 1000);

  }

}, 45000);

/* =========================
   AUTO SAVE
========================= */

setInterval(() => {

  notify(
    "Launcher auto-saved successfully 💾"
  );

}, 60000);

/* =========================
   STARTUP XP
========================= */

gainLauncherXP(10);

notify(
  "GAMEVERSE OMEGA READY 🚀"
);

/* =========================
   GODMODE LAUNCHER ENGINE
========================= */

/* =========================
   GLOBAL STATE
========================= */

const GAMEVERSE = {

  xp: 0,

  level: 1,

  chaos: 0,

  fps: 144,

  energy: 100,

  rank: "Beginner",

  booted: false

};

/* =========================
   ADVANCED RANK SYSTEM
========================= */

const ranks = [

  {
    xp: 0,
    name: "Beginner"
  },

  {
    xp: 100,
    name: "Coder"
  },

  {
    xp: 300,
    name: "Bug Hunter"
  },

  {
    xp: 700,
    name: "Reality Bender"
  },

  {
    xp: 1500,
    name: "Launcher God"
  }

];

function updateRank() {

  for (let i = 0; i < ranks.length; i++) {

    if (
      GAMEVERSE.xp >=
      ranks[i].xp
    ) {

      GAMEVERSE.rank =
      ranks[i].name;

    }

  }

  const rank =
  document.getElementById(
    "rankText"
  );

  if (rank) {

    rank.innerText =
    GAMEVERSE.rank;

  }

}

/* =========================
   XP ENGINE
========================= */

function addXP(amount) {

  GAMEVERSE.xp += amount;

  updateRank();

  updateHUD();

  if (
    GAMEVERSE.xp >=
    GAMEVERSE.level * 200
  ) {

    levelUp();

  }

}

function levelUp() {

  GAMEVERSE.level++;

  GAMEVERSE.energy = 100;

  notify(

    `LEVEL UP → ${GAMEVERSE.level} 🚀`

  );

  document.body.classList.add(
    "rainbow"
  );

  screenFlash();

  setTimeout(() => {

    document.body.classList.remove(
      "rainbow"
    );

  }, 3000);

}

/* =========================
   HUD
========================= */

function updateHUD() {

  const xp =
  document.getElementById(
    "xpText"
  );

  const level =
  document.getElementById(
    "levelText"
  );

  const energy =
  document.getElementById(
    "energyFill"
  );

  if (xp) {

    xp.innerText =
    `XP ${GAMEVERSE.xp}`;

  }

  if (level) {

    level.innerText =
    `LV ${GAMEVERSE.level}`;

  }

  if (energy) {

    energy.style.width =
    GAMEVERSE.energy + "%";

  }

}

/* =========================
   SCREEN FLASH
========================= */

function screenFlash() {

  const flash =
  document.createElement("div");

  flash.className =
  "screen-flash";

  document.body.appendChild(
    flash
  );

  setTimeout(() => {

    flash.remove();

  }, 500);

}

/* =========================
   CURSOR TRAIL
========================= */

document.addEventListener(
  "mousemove",
  e => {

    const trail =
    document.createElement("div");

    trail.className =
    "cursor-trail";

    trail.style.left =
    e.clientX + "px";

    trail.style.top =
    e.clientY + "px";

    document.body.appendChild(
      trail
    );

    setTimeout(() => {

      trail.remove();

    }, 600);

  }
);

/* =========================
   PARTICLE EXPLOSION
========================= */

function explosion(x, y) {

  for (let i = 0; i < 20; i++) {

    const particle =
    document.createElement("div");

    particle.className =
    "explosion-particle";

    particle.style.left =
    x + "px";

    particle.style.top =
    y + "px";

    particle.style.background =

    `hsl(

      ${Math.random() * 360},

      100%,

      60%

    )`;

    document.body.appendChild(
      particle
    );

    const angle =
    Math.random() * 360;

    const velocity =
    80 + Math.random() * 80;

    particle.animate(

      [

        {

          transform:
          "translate(0,0) scale(1)",

          opacity: 1

        },

        {

          transform:

          `translate(

            ${
              Math.cos(angle)
              * velocity
            }px,

            ${
              Math.sin(angle)
              * velocity
            }px

          ) scale(0)`,

          opacity: 0

        }

      ],

      {

        duration:
        1200,

        easing:
        "ease-out"

      }

    );

    setTimeout(() => {

      particle.remove();

    }, 1200);

  }

}

/* =========================
   CLICK EFFECTS
========================= */

document.addEventListener(
  "click",
  e => {

    explosion(
      e.clientX,
      e.clientY
    );

    addXP(5);

    GAMEVERSE.chaos++;

  }
);

/* =========================
   CHAOS ENGINE
========================= */

const chaosLines = [

  "Launcher stability questionable 😭",

  "Too much power detected.",

  "The buttons are evolving.",

  "Reality.exe stopped responding.",

  "The particles escaped containment.",

  "Your GPU needs emotional support.",

  "This launcher has boss music.",

  "Achievement unlocked: Opened launcher 100 times",
   
  "UI glow increased by 9000%.",

  "Somewhere a div is suffering."

];

function randomChaos() {

  const text =

  chaosLines[
    Math.floor(
      Math.random()
      * chaosLines.length
    )
  ];

  notify(text);

}

/* =========================
   RANDOM EVENTS
========================= */

setInterval(() => {

  const random =
  Math.random();

  if (random < 0.2) {

    randomChaos();

  }

  if (random < 0.08) {

    activateStorm();

  }

  if (random < 0.04) {

    activateBlackout();

  }

}, 20000);

/* =========================
   STORM MODE
========================= */

function activateStorm() {

  notify(
    "ENERGY STORM DETECTED ⚡"
  );

  document.body.classList.add(
    "storm-mode"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "storm-mode"
    );

  }, 6000);

}

/* =========================
   BLACKOUT MODE
========================= */

function activateBlackout() {

  notify(
    "SYSTEM BLACKOUT 😭"
  );

  document.body.classList.add(
    "blackout"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "blackout"
    );

  }, 3000);

}

/* =========================
   WINDOW PHYSICS
========================= */

document
.querySelectorAll(".app-window")
.forEach(win => {

  win.addEventListener(
    "mouseenter",
    () => {

      win.style.transform =

      "scale(1.02)";

    }
  );

  win.addEventListener(
    "mouseleave",
    () => {

      win.style.transform =

      "scale(1)";

    }
  );

});

/* =========================
   SECRET COMMANDS
========================= */

document.addEventListener(
  "keydown",
  e => {

    /* MATRIX */

    if (e.key === "m") {

      document.body.classList.toggle(
        "matrix-mode"
      );

      notify(
        "Matrix mode toggled 😎"
      );

    }

    /* CHAOS */

    if (e.key === "c") {

      randomChaos();

    }

    /* BOOST */

    if (e.key === "b") {

      GAMEVERSE.energy = 100;

      notify(
        "Energy restored ⚡"
      );

      updateHUD();

    }

    /* GODMODE */

    if (e.key === "g") {

      notify(
        "GODMODE ACTIVATED 😭🔥"
      );

      document.body.classList.add(
        "godmode"
      );

    }

  }
);

/* =========================
   BOOT SEQUENCE
========================= */

function bootSequence() {

  const lines = [

    "Initializing systems...",

    "Loading particles...",

    "Calibrating UI glow...",

    "Injecting chaos engine...",

    "Synchronizing dimensions...",

    "Launching GAMEVERSE 🚀"

  ];

  let i = 0;

  const interval = setInterval(() => {

    notify(lines[i]);

    i++;

    if (i >= lines.length) {

      clearInterval(interval);

      GAMEVERSE.booted = true;

    }

  }, 1000);

}

bootSequence();

/* =========================
   FPS COUNTER
========================= */

function fakeFPSLoop() {

  const fps =
  document.getElementById(
    "fpsCounter"
  );

  if (!fps) return;

  setInterval(() => {

    GAMEVERSE.fps =

    120 +

    Math.floor(
      Math.random() * 40
    );

    fps.innerText =

    `${GAMEVERSE.fps} FPS`;

  }, 1000);

}

fakeFPSLoop();

/* =========================
   AUTO SAVE
========================= */

setInterval(() => {

  notify(
    "Auto-save complete 💾"
  );

}, 60000);

/* =========================
   STARTUP
========================= */

notify(
  "GAMEVERSE GODMODE READY 🚀"
);

updateHUD();

updateRank();

/* =========================
   ASCENSION ENGINE
========================= */

const ASCENSION = {

  mode: "normal",

  power: 0,

  corruption: 0,

  dimensionalLevel: 1,

  stars: 0

};

/* =========================
   DIMENSION SYSTEM
========================= */

const dimensions = [

  "Reality",

  "Cyber Space",

  "Void Sector",

  "Quantum Realm",

  "Chaos Dimension",

  "Infinity Core"

];

function shiftDimension() {

  ASCENSION.dimensionalLevel++;

  if (
    ASCENSION.dimensionalLevel >=
    dimensions.length
  ) {

    ASCENSION.dimensionalLevel = 0;

  }

  const current =

  dimensions[
    ASCENSION.dimensionalLevel
  ];

  notify(

    `Dimension Shifted → ${current}`

  );

  document.body.classList.add(
    "dimension-shift"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "dimension-shift"
    );

  }, 4000);

}

/* =========================
   ENERGY WAVES
========================= */

function createEnergyWave(x, y) {

  const wave =
  document.createElement("div");

  wave.className =
  "energy-wave";

  wave.style.left =
  x + "px";

  wave.style.top =
  y + "px";

  document.body.appendChild(
    wave
  );

  setTimeout(() => {

    wave.remove();

  }, 2000);

}

document.addEventListener(
  "dblclick",
  e => {

    createEnergyWave(
      e.clientX,
      e.clientY
    );

    notify(
      "Energy Pulse Released ⚡"
    );

  }
);

/* =========================
   STAR GENERATOR
========================= */

function generateStars() {

  for (let i = 0; i < 80; i++) {

    const star =
    document.createElement("div");

    star.className =
    "space-star";

    star.style.left =
    Math.random() * 100 + "%";

    star.style.top =
    Math.random() * 100 + "%";

    star.style.animationDuration =

    2 +
    Math.random() * 6
    + "s";

    star.style.opacity =
    Math.random();

    document.body.appendChild(
      star
    );

  }

}

generateStars();

/* =========================
   AI SYSTEM
========================= */

const aiResponses = [

  "Analyzing player behavior...",

  "Launcher intelligence increased.",

  "System adapting to chaos.",

  "Warning: AI is learning too much.",

  "Neural glow activated.",

  "The launcher learned a new trick.",

  "Scanning for legendary vibes.",

  "This UI is becoming dangerous."

];

function aiSpeak() {

  const random =

  aiResponses[
    Math.floor(
      Math.random()
      * aiResponses.length
    )
  ];

  notify(random);

}

setInterval(
  aiSpeak,
  35000
);

/* =========================
   CINEMATIC CAMERA SHAKE
========================= */

function cinematicShake() {

  document.body.classList.add(
    "cinematic-shake"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "cinematic-shake"
    );

  }, 800);

}

/* =========================
   HYPER MODE
========================= */

function activateHyperMode() {

  ASCENSION.mode =
  "hyper";

  notify(
    "HYPER MODE ACTIVATED 😭🔥"
  );

  document.body.classList.add(
    "hyper-mode"
  );

  cinematicShake();

  setTimeout(() => {

    document.body.classList.remove(
      "hyper-mode"
    );

    ASCENSION.mode =
    "normal";

  }, 10000);

}

/* =========================
   GLITCH EVENTS
========================= */

function randomGlitch() {

  const allWindows =

  document.querySelectorAll(
    ".app-window"
  );

  allWindows.forEach(win => {

    win.classList.add(
      "glitch-window"
    );

  });

  notify(
    "GLITCH EVENT DETECTED 👁️"
  );

  setTimeout(() => {

    allWindows.forEach(win => {

      win.classList.remove(
        "glitch-window"
      );

    });

  }, 3000);

}

/* =========================
   SOUND REACTOR
========================= */

function fakeSoundPulse() {

  const bars =
  document.querySelectorAll(
    ".music-bar"
  );

  bars.forEach(bar => {

    const randomHeight =

    10 +
    Math.random() * 40;

    bar.style.height =

    randomHeight + "px";

  });

}

setInterval(
  fakeSoundPulse,
  120
);

/* =========================
   SECRET EVENTS
========================= */

const secretEvents = [

  "A cosmic duck appeared 🦆",

  "The launcher consumed extra RAM.",

  "Somewhere a div is crying.",

  "Maximum glow reached.",

  "The animations gained consciousness.",

  "The UI became illegal in 7 countries.",

  "The particles escaped reality.",

  "You unlocked ultra drip."

];

function triggerSecretEvent() {

  const event =

  secretEvents[
    Math.floor(
      Math.random()
      * secretEvents.length
    )
  ];

  notify(event);

  explosion(

    window.innerWidth / 2,

    window.innerHeight / 2

  );

}

/* =========================
   POWER ENGINE
========================= */

function increasePower() {

  ASCENSION.power++;

  if (
    ASCENSION.power % 10 === 0
  ) {

    notify(

      `Power Level ${ASCENSION.power}`

    );

  }

  if (
    ASCENSION.power >= 100
  ) {

    activateHyperMode();

    ASCENSION.power = 0;

  }

}

/* =========================
   REALTIME CLOCK FX
========================= */

function updateAdvancedClock() {

  const clock =
  document.getElementById(
    "clock"
  );

  if (!clock) return;

  const now =
  new Date();

  const time =

  now.toLocaleTimeString();

  clock.innerHTML =

  `
    ⏳ ${time}
  `;

}

setInterval(
  updateAdvancedClock,
  1000
);

/* =========================
   CURSOR ENERGY
========================= */

document.addEventListener(
  "mousemove",
  e => {

    if (
      Math.random() < 0.08
    ) {

      createEnergyWave(
        e.clientX,
        e.clientY
      );

    }

  }
);

/* =========================
   MULTI KEY COMMANDS
========================= */

document.addEventListener(
  "keydown",
  e => {

    /* dimension */

    if (e.key === "x") {

      shiftDimension();

    }

    /* hyper */

    if (e.key === "h") {

      activateHyperMode();

    }

    /* glitch */

    if (e.key === "j") {

      randomGlitch();

    }

    /* secret */

    if (e.key === "k") {

      triggerSecretEvent();

    }

  }
);

/* =========================
   AMBIENT EVENTS
========================= */

setInterval(() => {

  const random =
  Math.random();

  if (random < 0.15) {

    shiftDimension();

  }

  if (random < 0.08) {

    triggerSecretEvent();

  }

  if (random < 0.05) {

    randomGlitch();

  }

}, 45000);

/* =========================
   STARTUP SEQUENCE
========================= */

function ascensionBoot() {

  const bootLines = [

    "Injecting quantum particles...",

    "Synchronizing dimensions...",

    "Stabilizing chaos engine...",

    "Enhancing cinematic systems...",

    "Preparing hyper UI...",

    "ASCENSION COMPLETE 🚀"

  ];

  let i = 0;

  const interval = setInterval(() => {

    notify(
      bootLines[i]
    );

    i++;

    if (
      i >= bootLines.length
    ) {

      clearInterval(interval);

    }

  }, 1200);

}

ascensionBoot();

/* =========================
   AUTO POWER
========================= */

setInterval(() => {

  increasePower();

}, 3000);

/* =========================
   FINAL MESSAGE
========================= */

notify(
  "GAMEVERSE ASCENSION ONLINE 😭🔥"
);

/* =========================
   DESKTOP ICON EFFECTS
========================= */

const desktopIcons =

document.querySelectorAll(
  ".desktop-icon"
);

desktopIcons.forEach(icon => {

  /* click glow */

  icon.addEventListener(
    "click",
    e => {

      explosion(
        e.clientX,
        e.clientY
      );

      addXP(10);

      notify(
        "Application launched 🚀"
      );

    }
  );

  /* hover sound simulation */

  icon.addEventListener(
    "mouseenter",
    () => {

      icon.style.transform =

      "translateY(-8px) scale(1.05) rotate(-2deg)";

    }
  );

  icon.addEventListener(
    "mouseleave",
    () => {

      icon.style.transform =

      "";

    }
  );

});

/* =========================
   ICON RANDOM EVENTS
========================= */

setInterval(() => {

  const icons =

  document.querySelectorAll(
    ".desktop-icon"
  );

  const randomIcon =

  icons[
    Math.floor(
      Math.random()
      * icons.length
    )
  ];

  if (!randomIcon) return;

  randomIcon.classList.add(
    "icon-pulse"
  );

  setTimeout(() => {

    randomIcon.classList.remove(
      "icon-pulse"
    );

  }, 2000);

}, 7000);

/* =========================
   TERMINAL SYSTEM
========================= */

const terminalInput =

document.getElementById(
  "terminalInput"
);

const terminalOutput =

document.getElementById(
  "terminalOutput"
);

const commands = {

  help: [

    "Available commands:",

    "help",

    "clear",

    "scan",

    "xp",

    "rank",

    "chaos",

    "matrix",

    "hyper",

    "launch",

    "glitch"

  ],

  scan: [

    "Scanning systems...",

    "Threat level: dramatic 😭",

    "Particles: unstable",

    "Launcher status: legendary"

  ],

  xp: () => [

    `XP: ${GAMEVERSE.xp}`

  ],

  rank: () => [

    `Rank: ${GAMEVERSE.rank}`

  ],

  chaos: [

    "Chaos engine activated 🔥"

  ],

  matrix: [

    "Matrix vision enabled 😎"

  ],

  hyper: [

    "Hyper systems online 🚀"

  ],

  launch: [

    "Launching cinematic mode..."

  ],

  glitch: [

    "WARNING:",
    "reality distortion detected 👁️"

  ]

};

/* =========================
   ADD TERMINAL LINE
========================= */

function addTerminalLine(text) {

  const line =
  document.createElement("div");

  line.innerText =
  text;

  terminalOutput.appendChild(
    line
  );

  terminalOutput.scrollTop =

  terminalOutput.scrollHeight;

}

/* =========================
   RUN COMMAND
========================= */

function runCommand(cmd) {

  addTerminalLine(
    `> ${cmd}`
  );

  cmd =
  cmd.toLowerCase();

  if (cmd === "clear") {

    terminalOutput.innerHTML =
    "";

    return;

  }

  if (!commands[cmd]) {

    addTerminalLine(
      "Unknown command 😭"
    );

    return;

  }

  let result =
  commands[cmd];

  if (
    typeof result ===
    "function"
  ) {

    result = result();

  }

  result.forEach(line => {

    addTerminalLine(line);

  });

  /* special effects */

  if (cmd === "matrix") {

    document.body.classList.toggle(
      "matrix-mode"
    );

  }

  if (cmd === "hyper") {

    activateHyperMode();

  }

  if (cmd === "chaos") {

    randomChaos();

  }

  if (cmd === "glitch") {

    randomGlitch();

  }

  if (cmd === "launch") {

    screenFlash();

  }

}

/* =========================
   ENTER KEY
========================= */

terminalInput.addEventListener(
  "keydown",
  e => {

    if (e.key === "Enter") {

      const value =
      terminalInput.value.trim();

      if (!value) return;

      runCommand(value);

      terminalInput.value =
      "";

    }

  }
);

/* =========================
   ACHIEVEMENTS
========================= */

const achievements = [

  {
    id: "first_click",

    title:
    "First Contact 😎",

    desc:
    "Clicked the launcher.",

    unlocked: false
  },

  {
    id: "chaos_master",

    title:
    "Chaos Master 😭",

    desc:
    "Activated chaos mode.",

    unlocked: false
  },

  {
    id: "terminal_user",

    title:
    "Void Hacker 💻",

    desc:
    "Used the terminal.",

    unlocked: false
  },

  {
    id: "godmode",

    title:
    "Launcher God 🚀",

    desc:
    "Reached GODMODE.",

    unlocked: false
  }

];

/* =========================
   QUESTS
========================= */

const quests = [

  {
    title:
    "Open 5 apps",

    progress: 0,

    goal: 5
  },

  {
    title:
    "Gain 100 XP",

    progress: 0,

    goal: 100
  }

];

/* =========================
   RENDER QUESTS
========================= */

function renderQuests() {

  const list =
  document.getElementById(
    "questList"
  );

  if (!list) return;

  list.innerHTML = "";

  quests.forEach(q => {

    const item =
    document.createElement("div");

    item.className =
    "quest-item";

    item.innerHTML =

    `
      <div>${q.title}</div>

      <div>
        ${q.progress}/${q.goal}
      </div>
    `;

    list.appendChild(item);

  });

}

renderQuests();

/* =========================
   UNLOCK ACHIEVEMENT
========================= */

function unlockAchievement(id) {

  const achievement =

  achievements.find(
    a => a.id === id
  );

  if (
    !achievement ||
    achievement.unlocked
  ) return;

  achievement.unlocked = true;

  const popup =
  document.createElement("div");

  popup.className =
  "achievement-popup";

  popup.innerText =

  `🏆 ${achievement.title}`;

  document.body.appendChild(
    popup
  );

  setTimeout(() => {

    popup.remove();

  }, 4000);

  renderAchievements();

  notify(
    `Achievement unlocked:
     ${achievement.title}`
  );

}

/* =========================
   RENDER ACHIEVEMENTS
========================= */

function renderAchievements() {

  const list =
  document.getElementById(
    "achievementList"
  );

  if (!list) return;

  list.innerHTML = "";

  achievements
  .filter(a => a.unlocked)
  .forEach(a => {

    const item =
    document.createElement("div");

    item.className =
    "achievement-item";

    item.innerHTML =

    `
      <div>
        ${a.title}
      </div>

      <small>
        ${a.desc}
      </small>
    `;

    list.appendChild(item);

  });

}

renderAchievements();

/* =========================
   QUEST TRACKING
========================= */

function updateQuest(title, amount = 1) {

  const quest =

  quests.find(
    q => q.title === title
  );

  if (!quest) return;

  quest.progress += amount;

  if (
    quest.progress >=
    quest.goal
  ) {

    notify(
      `Quest completed:
       ${quest.title}`
    );

    addXP(50);

  }

  renderQuests();

}

/* =========================
   CLICK TRACKER
========================= */

document.addEventListener(
  "click",
  () => {

    unlockAchievement(
      "first_click"
    );

  }
);

/* =========================
   APP OPEN TRACKER
========================= */

const oldOpenWindow =
openWindow;

openWindow = function(id) {

  oldOpenWindow(id);

  updateQuest(
    "Open 5 apps"
  );

};

/* =========================
   TERMINAL TRACKER
========================= */

const oldRunCommand =
runCommand;

runCommand = function(cmd) {

  oldRunCommand(cmd);

  unlockAchievement(
    "terminal_user"
  );

};

/* =========================
   CHAOS TRACKER
========================= */

const oldChaos =
randomChaos;

randomChaos = function() {

  oldChaos();

  unlockAchievement(
    "chaos_master"
  );

};

/* =========================
   GODMODE TRACKER
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "g") {

      unlockAchievement(
        "godmode"
      );

    }

  }
);

/* =========================
   XP QUEST TRACKING
========================= */

const oldXP =
addXP;

addXP = function(amount) {

  oldXP(amount);

  updateQuest(
    "Gain 100 XP",
    amount
  );

};

/* =========================
   WEATHER ENGINE
========================= */

const weatherStatus =

document.getElementById(
  "weatherStatus"
);

/* =========================
   RAIN SYSTEM
========================= */

function createRain() {

  const rainLayer =

  document.getElementById(
    "rainLayer"
  );

  for (let i = 0; i < 120; i++) {

    const drop =
    document.createElement("div");

    drop.className =
    "rain-drop";

    drop.style.left =

      Math.random() * 100 + "%";

    drop.style.animationDuration =

      0.5 +
      Math.random() * 0.7
      + "s";

    drop.style.opacity =
    Math.random();

    rainLayer.appendChild(drop);

  }

}

createRain();

/* =========================
   LIGHTNING
========================= */

function lightningStrike() {

  const flash =
  document.getElementById(
    "lightningFlash"
  );

  flash.animate(

    [

      { opacity: 0 },

      { opacity: 1 },

      { opacity: 0 }

    ],

    {

      duration: 250

    }

  );

  notify(
    "⚡ Lightning Strike"
  );

}

/* random lightning */

setInterval(() => {

  if (Math.random() < 0.15) {

    lightningStrike();

  }

}, 7000);

/* =========================
   METEORS
========================= */

function spawnMeteor() {

  const meteorLayer =

  document.getElementById(
    "meteorLayer"
  );

  const meteor =
  document.createElement("div");

  meteor.className =
  "meteor";

  meteor.style.left =

    Math.random() * 100 + "%";

  meteor.style.top =
  "-100px";

  meteor.style.animationDuration =

    1 +
    Math.random() * 2
    + "s";

  meteorLayer.appendChild(
    meteor
  );

  setTimeout(() => {

    meteor.remove();

  }, 3000);

}

/* random meteors */

setInterval(() => {

  if (Math.random() < 0.25) {

    spawnMeteor();

  }

}, 5000);

/* =========================
   DAY NIGHT CYCLE
========================= */

let isNight = true;

function toggleDayNight() {

  isNight = !isNight;

  if (isNight) {

    document.body.classList.remove(
      "day-mode"
    );

    document.body.classList.add(
      "night-mode"
    );

    weatherStatus.innerText =

    "🌌 Cosmic Night";

  } else {

    document.body.classList.remove(
      "night-mode"
    );

    document.body.classList.add(
      "day-mode"
    );

    weatherStatus.innerText =

    "☀ Neon Day";

  }

}

/* switch every 60 sec */

setInterval(
  toggleDayNight,
  60000
);

/* =========================
   COSMIC STORM
========================= */

function activateCosmicStorm() {

  document.body.classList.add(
    "cosmic-storm"
  );

  weatherStatus.innerText =

  "🌩 Cosmic Storm";

  notify(
    "COSMIC STORM ACTIVE 😭🔥"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "cosmic-storm"
    );

    weatherStatus.innerText =

    "🌌 Cosmic Night";

  }, 10000);

}

/* random storms */

setInterval(() => {

  if (Math.random() < 0.08) {

    activateCosmicStorm();

  }

}, 25000);

/* =========================
   AMBIENT WEATHER EVENTS
========================= */

const weatherLines = [

  "Rain intensity increased.",

  "Meteor activity detected ☄",

  "Fog density rising.",

  "The atmosphere feels illegal 😭",

  "Cosmic winds detected.",

  "Reality weather unstable."

];

setInterval(() => {

  const line =

  weatherLines[
    Math.floor(
      Math.random()
      * weatherLines.length
    )
  ];

  notify(line);

}, 40000);

/* =========================
   STARTUP
========================= */

notify(
  "Weather Engine Online 🌧"
);

/* =========================
   FAKE ONLINE USERS
========================= */

const fakeUsers = [

  "VoidHunter",

  "ShadowDev",

  "PixelGhost",

  "CyberWolf",

  "QuantumKid",

  "Nova.exe",

  "DarkByte",

  "AstroFox",

  "ChaosPlayer",

  "NeonWizard"

];

const onlineUsers =
document.getElementById(
  "onlineUsers"
);

function renderOnlineUsers() {

  onlineUsers.innerHTML = "";

  fakeUsers.forEach(user => {

    const div =
    document.createElement("div");

    div.className =
    "online-user";

    div.innerText =
    `🟢 ${user}`;

    onlineUsers.appendChild(div);

  });

}

renderOnlineUsers();

/* =========================
   GLOBAL CHAT
========================= */

const globalChat =
document.getElementById(
  "globalChat"
);

function addChatMessage(user, text) {

  const msg =
  document.createElement("div");

  msg.className =
  "chat-message";

  msg.innerHTML =

  `
    <div class="chat-user">

      ${user}

    </div>

    <div>

      ${text}

    </div>
  `;

  globalChat.appendChild(msg);

  globalChat.scrollTop =

  globalChat.scrollHeight;

}

/* =========================
   RANDOM CHAT MESSAGES
========================= */

const randomMessages = [

  "who activated chaos mode 😭",

  "this launcher is illegal 🔥",

  "my particles escaped again",

  "bro the UI is alive",

  "someone spawned meteors ☄",

  "why is the weather dramatic",

  "VOID TERMINAL is insane",

  "the pet learned magic again",

  "FPS dropping emotionally",

  "who touched the reality engine 👁️",

  "achievement unlocked: Opened launcher 100 times",
   
];

function randomGlobalMessage() {

  const user =

  fakeUsers[
    Math.floor(
      Math.random()
      * fakeUsers.length
    )
  ];

  const text =

  randomMessages[
    Math.floor(
      Math.random()
      * randomMessages.length
    )
  ];

  addChatMessage(
    user,
    text
  );

}

/* every few seconds */

setInterval(
  randomGlobalMessage,
  5000
);

/* =========================
   PLAYER CHAT
========================= */

const chatInput =
document.getElementById(
  "chatInput"
);

const chatSend =
document.getElementById(
  "chatSend"
);

function sendPlayerMessage() {

  const text =
  chatInput.value.trim();

  if (!text) return;

  addChatMessage(
    "YOU",
    text
  );

  chatInput.value = "";

  addXP(5);

}

chatSend.addEventListener(
  "click",
  sendPlayerMessage
);

chatInput.addEventListener(
  "keydown",
  e => {

    if (e.key === "Enter") {

      sendPlayerMessage();

    }

  }
);

/* =========================
   WORLD EVENTS
========================= */

const worldEvents = [

  "🌩 Cosmic storm detected",

  "☄ Meteor shower incoming",

  "👁 Reality distortion spreading",

  "⚡ Hyper mode instability",

  "🧙 Magic levels rising",

  "🚨 Chaos engine overheating"

];

function worldBroadcast() {

  const event =

  worldEvents[
    Math.floor(
      Math.random()
      * worldEvents.length
    )
  ];

  notify(
    event
  );

  addChatMessage(
    "SYSTEM",
    event
  );

}

/* random world events */

setInterval(
  worldBroadcast,
  30000
);

/* =========================
   STARTUP CHAT
========================= */

addChatMessage(
  "SYSTEM",

  "Connected to GAMEVERSE network 🌍"
);

addChatMessage(
  "ShadowDev",

  "yo this launcher is insane 😭"
);


/* =========================
   DRAGGABLE WINDOWS
========================= */

const windows =

document.querySelectorAll(
  ".app-window"
);

let highestZ = 100;

/* =========================
   MAKE DRAGGABLE
========================= */

windows.forEach(windowEl => {

  const topbar =

  windowEl.querySelector(
    ".app-topbar"
  );

  if (!topbar) return;

  let isDragging = false;

  let offsetX = 0;
  let offsetY = 0;

  /* bring front */

  function focusWindow() {

    highestZ++;

    windowEl.style.zIndex =
    highestZ;

    windowEl.classList.add(
      "window-focus"
    );

    setTimeout(() => {

      windowEl.classList.remove(
        "window-focus"
      );

    }, 300);

  }

  /* mouse down */

  topbar.addEventListener(
    "mousedown",
    e => {

      isDragging = true;

      focusWindow();

      offsetX =

        e.clientX -
        windowEl.offsetLeft;

      offsetY =

        e.clientY -
        windowEl.offsetTop;

      document.body.style.userSelect =
      "none";

    }
  );

  /* move */

  document.addEventListener(
    "mousemove",
    e => {

      if (!isDragging) return;

      windowEl.style.left =

        e.clientX - offsetX
        + "px";

      windowEl.style.top =

        e.clientY - offsetY
        + "px";

    }
  );

  /* release */

  document.addEventListener(
    "mouseup",
    () => {

      isDragging = false;

      document.body.style.userSelect =
      "";

    }
  );

  /* click focus */

  windowEl.addEventListener(
    "mousedown",
    focusWindow
  );

});

/* =========================
   WINDOW SHAKE EFFECT
========================= */

function shakeWindow(id) {

  const win =
  document.getElementById(id);

  if (!win) return;

  win.classList.add(
    "window-shake"
  );

  setTimeout(() => {

    win.classList.remove(
      "window-shake"
    );

  }, 600);

}

/* =========================
   RANDOM WINDOW SHAKE
========================= */

setInterval(() => {

  const allWindows =

  document.querySelectorAll(
    ".app-window"
  );

  if (!allWindows.length) return;

  const randomWindow =

  allWindows[
    Math.floor(
      Math.random()
      * allWindows.length
    )
  ];

  if (Math.random() < 0.12) {

    shakeWindow(
      randomWindow.id
    );

  }

}, 10000);

/* =========================
   GAMEVERSE SAVE SYSTEM
========================= */

const GAMEVERSE = {

  xp: 0,

  level: 1,

  rank: "Rookie",

  achievements: []

};

/* =========================
   SAVE DATA
========================= */

function saveGame() {

  localStorage.setItem(

    "gameverse_save",

    JSON.stringify(GAMEVERSE)

  );

  notify(
    "Progress Saved 💾"
  );

}

/* =========================
   LOAD DATA
========================= */

function loadGame() {

  const save =

  localStorage.getItem(
    "gameverse_save"
  );

  if (!save) return;

  const data =
  JSON.parse(save);

  GAMEVERSE.xp =
  data.xp || 0;

  GAMEVERSE.level =
  data.level || 1;

  GAMEVERSE.rank =
  data.rank || "Rookie";

  GAMEVERSE.achievements =
  data.achievements || [];

  updateProfile();

  notify(
    "Save Loaded 🚀"
  );

}

/* =========================
   UPDATE PROFILE UI
========================= */

function updateProfile() {

  document.getElementById(
    "profileXP"
  ).innerText =

  GAMEVERSE.xp;

  document.getElementById(
    "profileLevel"
  ).innerText =

  GAMEVERSE.level;

  document.getElementById(
    "profileRank"
  ).innerText =

  GAMEVERSE.rank;

  document.getElementById(
    "profileAchievements"
  ).innerText =

  GAMEVERSE.achievements.length;

}

/* =========================
   XP SYSTEM
========================= */

function addXP(amount) {

  GAMEVERSE.xp += amount;

  /* level system */

  const nextLevel =

  GAMEVERSE.level * 100;

  if (
    GAMEVERSE.xp >= nextLevel
  ) {

    GAMEVERSE.level++;

    notify(
      `LEVEL UP 😭🔥
       Level ${GAMEVERSE.level}`
    );

    explosion(
      window.innerWidth / 2,
      window.innerHeight / 2
    );

  }

  /* rank system */

  if (GAMEVERSE.level >= 20) {

    GAMEVERSE.rank =
    "Void Legend";

  }

  else if (
    GAMEVERSE.level >= 10
  ) {

    GAMEVERSE.rank =
    "Cyber Warrior";

  }

  else if (
    GAMEVERSE.level >= 5
  ) {

    GAMEVERSE.rank =
    "Elite Player";

  }

  updateProfile();

  saveGame();

}

/* =========================
   SAVE ACHIEVEMENTS
========================= */

function saveAchievement(name) {

  if (
    GAMEVERSE.achievements.includes(name)
  ) return;

  GAMEVERSE.achievements.push(name);

  updateProfile();

  saveGame();

}

/* =========================
   AUTO SAVE
========================= */

setInterval(() => {

  saveGame();

}, 30000);

/* =========================
   LOAD ON START
========================= */

loadGame();

/* =========================
   STARTUP BONUS
========================= */

notify(
  "SAVE SYSTEM ONLINE 😭🔥"
);

/* =========================
   HORROR ENGINE
========================= */

const warningScreen =

document.getElementById(
  "warningScreen"
);

const entityMessage =

document.getElementById(
  "entityMessage"
);

const glitchOverlay =

document.getElementById(
  "glitchOverlay"
);

/* =========================
   SHOW WARNING
========================= */

function showWarning(text) {

  warningScreen.style.opacity =
  "1";

  warningScreen.querySelector(
    ".warning-text"
  ).innerText = text;

  setTimeout(() => {

    warningScreen.style.opacity =
    "0";

  }, 3000);

}

/* =========================
   ENTITY MESSAGE
========================= */

function showEntityMessage(text) {

  entityMessage.innerText =
  text;

  entityMessage.style.opacity =
  "1";

  entityMessage.style.transform =

  "translateY(0)";

  setTimeout(() => {

    entityMessage.style.opacity =
    "0";

    entityMessage.style.transform =

    "translateY(20px)";

  }, 5000);

}

/* =========================
   GLITCH FLASH
========================= */

function glitchFlash() {

  glitchOverlay.style.opacity =
  "1";

  setTimeout(() => {

    glitchOverlay.style.opacity =
    "0";

  }, 150);

}

/* =========================
   HORROR EVENT
========================= */

function triggerHorrorEvent() {

  const events = [

    () => {

      showWarning(
        "REALITY FAILURE DETECTED"
      );

    },

    () => {

      showEntityMessage(
        "👁 something is watching..."
      );

    },

    () => {

      document.body.classList.add(
        "horror-mode"
      );

      setTimeout(() => {

        document.body.classList.remove(
          "horror-mode"
        );

      }, 4000);

    },

    () => {

      document.body.classList.add(
        "screen-distort"
      );

      setTimeout(() => {

        document.body.classList.remove(
          "screen-distort"
        );

      }, 3000);

    },

    () => {

      glitchFlash();

    },

    () => {

      notify(
        "⚠ UNKNOWN SIGNAL DETECTED"
      );

    }

  ];

  const randomEvent =

  events[
    Math.floor(
      Math.random()
      * events.length
    )
  ];

  randomEvent();

}

/* =========================
   RANDOM HORROR EVENTS
========================= */

setInterval(() => {

  if (Math.random() < 0.15) {

    triggerHorrorEvent();

  }

}, 20000);

/* =========================
   SECRET KEY
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "9") {

      triggerHorrorEvent();

      notify(
        "HORROR MODE ACTIVATED 👁"
      );

    }

  }
);

/* =========================
   STARTUP MESSAGE
========================= */

setTimeout(() => {

  showEntityMessage(
    "👁 GAMEVERSE is awake"
  );

}, 10000);

/* =========================
   AI PET ENGINE
========================= */

const aiPet =
document.getElementById(
  "aiPet"
);

const petFace =
document.getElementById(
  "petFace"
);

const petSpeech =
document.getElementById(
  "petSpeech"
);

/* =========================
   PET DATA
========================= */

const PET = {

  mood: "happy",

  level: 1,

  evolution: "Baby AI",

  energy: 100

};

/* =========================
   PET TALK
========================= */

const petLines = [

  "This launcher is insane 😭",

  "I consumed 4 bugs today",

  "Reality seems unstable 👁",

  "Can I cast meteor now?",

  "Your UI has extra drip 🔥",

  "I saw the terminal moving",

  "Do not trust the particles",

  "I accidentally opened another dimension",

  "Why is the weather dramatic again",

  "I require pizza 🍕"

];

function petSpeak(text) {

  petSpeech.innerText =
  text;

  petSpeech.classList.add(
    "pet-talk"
  );

  setTimeout(() => {

    petSpeech.classList.remove(
      "pet-talk"
    );

  }, 4000);

}

/* random talking */

setInterval(() => {

  const line =

  petLines[
    Math.floor(
      Math.random()
      * petLines.length
    )
  ];

  petSpeak(line);

}, 18000);

/* =========================
   FOLLOW CURSOR
========================= */

document.addEventListener(
  "mousemove",
  e => {

    const x =
    e.clientX * 0.03;

    const y =
    e.clientY * 0.03;

    aiPet.style.transform =

    `translate(${x}px, ${y}px)`;

  }
);

/* =========================
   PET MAGIC
========================= */

function petMagic() {

  const magic =
  document.createElement("div");

  magic.className =
  "pet-magic";

  magic.style.left =

    aiPet.offsetLeft + 50
    + "px";

  magic.style.top =

    aiPet.offsetTop + 50
    + "px";

  document.body.appendChild(
    magic
  );

  setTimeout(() => {

    magic.remove();

  }, 1000);

  notify(
    "✨ Pet cast magic"
  );

}

/* random magic */

setInterval(() => {

  if (Math.random() < 0.25) {

    petMagic();

  }

}, 10000);

/* =========================
   PET EVOLUTION
========================= */

function evolvePet() {

  PET.level++;

  if (PET.level >= 10) {

    PET.evolution =
    "Cyber Beast";

    petFace.innerText =
    "🤖";

  }

  if (PET.level >= 20) {

    PET.evolution =
    "Void Entity";

    petFace.innerText =
    "👁";

  }

  if (PET.level >= 30) {

    PET.evolution =
    "Chaos Dragon";

    petFace.innerText =
    "🐉";

  }

  petSpeak(
    `Evolution:
     ${PET.evolution}`
  );

  notify(
    `Pet evolved into
     ${PET.evolution} 😭🔥`
  );

}

/* level up over time */

setInterval(() => {

  evolvePet();

}, 60000);

/* =========================
   PET MOODS
========================= */

function setPetMood(mood) {

  aiPet.classList.remove(

    "pet-happy",
    "pet-angry",
    "pet-sleep"

  );

  PET.mood = mood;

  if (mood === "happy") {

    aiPet.classList.add(
      "pet-happy"
    );

  }

  if (mood === "angry") {

    aiPet.classList.add(
      "pet-angry"
    );

  }

  if (mood === "sleep") {

    aiPet.classList.add(
      "pet-sleep"
    );

  }

}

/* random moods */

setInterval(() => {

  const moods = [

    "happy",

    "angry",

    "sleep"

  ];

  const randomMood =

  moods[
    Math.floor(
      Math.random()
      * moods.length
    )
  ];

  setPetMood(
    randomMood
  );

}, 25000);

/* =========================
   PET CLICK
========================= */

aiPet.addEventListener(
  "click",
  () => {

    petMagic();

    addXP(20);

    petSpeak(
      "DO NOT POKE ME 😭"
    );

  }
);

/* =========================
   STARTUP
========================= */

petSpeak(
  "GAMEVERSE PET ONLINE 😭🔥"
);

/* =========================
   DIMENSION ENGINE
========================= */

const portal =
document.getElementById(
  "dimensionPortal"
);

const dimensionStatus =
document.getElementById(
  "dimensionStatus"
);

const dimensions = [

  {
    name:
    "🌌 Reality Dimension",

    class:
    ""
  },

  {
    name:
    "💜 Neon Dimension",

    class:
    "dimension-neon"
  },

  {
    name:
    "👁 Void Realm",

    class:
    "dimension-void"
  },

  {
    name:
    "🔥 Chaos Universe",

    class:
    "dimension-chaos"
  },

  {
    name:
    "💚 Matrix Reality",

    class:
    "dimension-matrix"
  },

  {
    name:
    "🌠 Galaxy Sector",

    class:
    "dimension-galaxy"
  }

];

let currentDimension = 0;

/* =========================
   OPEN PORTAL
========================= */

function openPortal() {

  portal.style.opacity =
  "1";

  portal.classList.add(
    "reality-warp"
  );

  notify(
    "🌀 Portal opened"
  );

  setTimeout(() => {

    portal.style.opacity =
    "0";

    portal.classList.remove(
      "reality-warp"
    );

  }, 2500);

}

/* =========================
   SWITCH DIMENSION
========================= */

function switchDimension() {

  openPortal();

  document.body.classList.remove(

    "dimension-neon",
    "dimension-void",
    "dimension-chaos",
    "dimension-matrix",
    "dimension-galaxy"

  );

  currentDimension++;

  if (
    currentDimension >=
    dimensions.length
  ) {

    currentDimension = 0;

  }

  const dimension =

  dimensions[
    currentDimension
  ];

  if (dimension.class) {

    document.body.classList.add(
      dimension.class
    );

  }

  dimensionStatus.innerText =

  dimension.name;

  notify(
    `Shifted to:
     ${dimension.name}`
  );

  addXP(25);

}

/* =========================
   RANDOM DIMENSION EVENTS
========================= */

const dimensionEvents = [

  "Reality stability dropping 👁",

  "Portal energy rising 🌀",

  "Dimensional fractures detected",

  "Chaos energy increased 🔥",

  "Matrix corruption spreading",

  "Galaxy resonance unstable"

];

function randomDimensionEvent() {

  const event =

  dimensionEvents[
    Math.floor(
      Math.random()
      * dimensionEvents.length
    )
  ];

  notify(event);

}

/* =========================
   AUTO SWITCH
========================= */

setInterval(() => {

  if (Math.random() < 0.15) {

    switchDimension();

  }

}, 45000);

/* =========================
   RANDOM EVENTS
========================= */

setInterval(
  randomDimensionEvent,
  30000
);

/* =========================
   HOTKEY
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "p") {

      switchDimension();

    }

  }
);

/* =========================
   STARTUP
========================= */

notify(
  "DIMENSION ENGINE ONLINE 😭🔥"
);

/* =========================
   BOSS RAID ENGINE
========================= */

const bossEvent =
document.getElementById(
  "bossEvent"
);

const bossHPFill =
document.getElementById(
  "bossHPFill"
);

const bossName =
document.getElementById(
  "bossName"
);

const bossStatus =
document.getElementById(
  "bossStatus"
);

/* =========================
   BOSS DATA
========================= */

const bosses = [

  {

    name:
    "👁 VOID TITAN",

    hp: 1000,

    status:
    "Reality collapse detected"

  },

  {

    name:
    "🔥 CHAOS DRAGON",

    hp: 1400,

    status:
    "Chaos flames spreading"

  },

  {

    name:
    "🤖 CYBER OVERLORD",

    hp: 1800,

    status:
    "System corruption active"

  },

  {

    name:
    "🌌 GALAXY EATER",

    hp: 2200,

    status:
    "Stars are disappearing"

  }

];

let activeBoss = null;

/* =========================
   START RAID
========================= */

function startRaid() {

  activeBoss =

  bosses[
    Math.floor(
      Math.random()
      * bosses.length
    )
  ];

  bossEvent.style.opacity =
  "1";

  bossName.innerText =
  activeBoss.name;

  bossStatus.innerText =
  activeBoss.status;

  bossHPFill.style.width =
  "100%";

  document.body.classList.add(
    "raid-mode"
  );

  notify(
    `🚨 RAID STARTED:
     ${activeBoss.name}`
  );

  addChatMessage(
    "SYSTEM",

    `⚠ ${activeBoss.name}
     has appeared`
  );

}

/* =========================
   DAMAGE BOSS
========================= */

function damageBoss(amount) {

  if (!activeBoss) return;

  activeBoss.hp -= amount;

  const maxHP = 2200;

  const percent =

    (activeBoss.hp / maxHP)
    * 100;

  bossHPFill.style.width =

    percent + "%";

  screenShake();

  if (activeBoss.hp <= 0) {

    defeatBoss();

  }

}

/* =========================
   SCREEN SHAKE
========================= */

function screenShake() {

  document.body.classList.add(
    "screen-shake"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "screen-shake"
    );

  }, 300);

}

/* =========================
   DEFEAT BOSS
========================= */

function defeatBoss() {

  notify(
    `🏆 ${activeBoss.name}
     defeated 😭🔥`
  );

  addXP(300);

  bossEvent.style.opacity =
  "0";

  document.body.classList.remove(
    "raid-mode"
  );

  addChatMessage(
    "SYSTEM",

    `${activeBoss.name}
     was destroyed 🔥`
  );

  activeBoss = null;

}

/* =========================
   AUTO DAMAGE
========================= */

setInterval(() => {

  if (!activeBoss) return;

  damageBoss(

    20 +
    Math.random() * 50

  );

}, 1500);

/* =========================
   RANDOM RAIDS
========================= */

setInterval(() => {

  if (
    !activeBoss &&
    Math.random() < 0.12
  ) {

    startRaid();

  }

}, 60000);

/* =========================
   HOTKEY
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "b") {

      if (!activeBoss) {

        startRaid();

      }

    }

  }
);

/* =========================
   STARTUP
========================= */

notify(
  "RAID ENGINE ONLINE 😭🔥"
);

/* =========================
   AUDIO ENGINE
========================= */

const bgMusic =
document.getElementById(
  "bgMusic"
);

const bossMusic =
document.getElementById(
  "bossMusic"
);

const clickSound =
document.getElementById(
  "clickSound"
);

const magicSound =
document.getElementById(
  "magicSound"
);

const musicToggle =
document.getElementById(
  "musicToggle"
);

const volumeSlider =
document.getElementById(
  "volumeSlider"
);

let musicEnabled = false;

/* =========================
   TOGGLE MUSIC
========================= */

musicToggle.addEventListener(
  "click",
  () => {

    musicEnabled =
    !musicEnabled;

    if (musicEnabled) {

      bgMusic.play();

      musicToggle.innerText =

      "⏸ STOP MUSIC";

      notify(
        "Music Engine Online 🎵"
      );

    } else {

      bgMusic.pause();

      bossMusic.pause();

      musicToggle.innerText =

      "▶ PLAY MUSIC";

    }

  }
);

/* =========================
   VOLUME CONTROL
========================= */

volumeSlider.addEventListener(
  "input",
  () => {

    const volume =

    volumeSlider.value;

    bgMusic.volume =
    volume;

    bossMusic.volume =
    volume;

    clickSound.volume =
    volume;

    magicSound.volume =
    volume;

  }
);

/* =========================
   CLICK SOUNDS
========================= */

document.addEventListener(
  "click",
  () => {

    clickSound.currentTime = 0;

    clickSound.play();

  }
);

/* =========================
   MAGIC SOUND
========================= */

const oldPetMagic =
petMagic;

petMagic = function() {

  oldPetMagic();

  magicSound.currentTime = 0;

  magicSound.play();

};

/* =========================
   BOSS MUSIC
========================= */

const oldStartRaid =
startRaid;

startRaid = function() {

  oldStartRaid();

  if (musicEnabled) {

    bgMusic.pause();

    bossMusic.play();

  }

};

const oldDefeatBoss =
defeatBoss;

defeatBoss = function() {

  oldDefeatBoss();

  if (musicEnabled) {

    bossMusic.pause();

    bgMusic.play();

  }

};

/* =========================
   AUDIO REACTIVE MODE
========================= */

setInterval(() => {

  if (!musicEnabled) return;

  document.body.classList.add(
    "audio-reactive"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "audio-reactive"
    );

  }, 500);

}, 1200);

/* =========================
   RANDOM AMBIENT SOUNDS
========================= */

const audioLines = [

  "🌧 Rain ambience intensified",

  "🎵 Synthwave frequencies stable",

  "⚡ Bass reactor overloaded",

  "🌌 Cosmic resonance detected",

  "🔥 Raid soundtrack armed"

];

setInterval(() => {

  const line =

  audioLines[
    Math.floor(
      Math.random()
      * audioLines.length
    )
  ];

  notify(line);

}, 50000);

/* =========================
   STARTUP
========================= */

notify(
  "AUDIO ENGINE READY 😭🔥"
);

/* =========================
   VOID TERMINAL
========================= */

const consoleInput =
document.getElementById(
  "consoleInput"
);

const consoleOutput =
document.getElementById(
  "consoleOutput"
);

/* =========================
   PRINT LINE
========================= */

function printConsole(text) {

  const line =
  document.createElement("div");

  line.className =
  "console-line";

  line.innerText = text;

  consoleOutput.appendChild(
    line
  );

  consoleOutput.scrollTop =

  consoleOutput.scrollHeight;

}

/* =========================
   COMMANDS
========================= */

function executeCommand(cmd) {

  const command =
  cmd.toLowerCase();

  printConsole(
    `> ${command}`
  );

  /* =========================
     PORTAL
  ========================= */

  if (command === "open portal") {

    switchDimension();

    printConsole(
      "🌀 Portal opened"
    );

  }

  /* =========================
     METEOR
  ========================= */

  else if (
    command === "cast meteor"
  ) {

    for (let i = 0; i < 8; i++) {

      spawnMeteor();

    }

    printConsole(
      "☄ Meteor spell cast"
    );

  }

  /* =========================
     CHAOS
  ========================= */

  else if (
    command === "chaos"
  ) {

    activateCosmicStorm();

    triggerHorrorEvent();

    printConsole(
      "🔥 Chaos protocol enabled"
    );

  }

  /* =========================
     RAID
  ========================= */

  else if (
    command === "spawn boss"
  ) {

    startRaid();

    printConsole(
      "👹 Boss raid spawned"
    );

  }

  /* =========================
     PET
  ========================= */

  else if (
    command === "heal pet"
  ) {

    setPetMood("happy");

    petSpeak(
      "I HAVE BEEN HEALED 😭"
    );

    printConsole(
      "✨ Pet healed"
    );

  }

  /* =========================
     XP
  ========================= */

  else if (
    command === "givexp"
  ) {

    addXP(500);

    printConsole(
      "⚡ +500 XP granted"
    );

  }

  /* =========================
     GODMODE
  ========================= */

  else if (
    command === "godmode"
  ) {

    document.body.classList.add(
      "dimension-chaos"
    );

    notify(
      "GODMODE ENABLED 😭🔥"
    );

    printConsole(
      "👁 GODMODE activated"
    );

  }

  /* =========================
     CLEAR
  ========================= */

  else if (
    command === "clear"
  ) {

    consoleOutput.innerHTML = "";

  }

  /* =========================
     HELP
  ========================= */

  else if (
    command === "help"
  ) {

    printConsole(
      `
Commands:

open portal
cast meteor
chaos
spawn boss
heal pet
givexp
godmode
clear
help
      `
    );

  }

  /* =========================
     UNKNOWN
  ========================= */

  else {

    printConsole(
      "❌ Unknown command"
    );

  }

}

/* =========================
   ENTER KEY
========================= */

consoleInput.addEventListener(
  "keydown",
  e => {

    if (e.key === "Enter") {

      const value =

      consoleInput.value.trim();

      if (!value) return;

      executeCommand(value);

      consoleInput.value = "";

    }

  }
);

/* =========================
   STARTUP
========================= */

printConsole(
  "VOID TERMINAL READY 😭🔥"
);

printConsole(
  "Type HELP for commands"
);

/* =========================
   AI VOICE CORE
========================= */

const voiceButton =
document.getElementById(
  "voiceButton"
);

const aiResponse =
document.getElementById(
  "aiResponse"
);

/* =========================
   SPEAK
========================= */

function aiSpeak(text) {

  aiResponse.innerText =
  text;

  const speech =
  new SpeechSynthesisUtterance(
    text
  );

  speech.rate = 1;

  speech.pitch = 1;

  speech.volume = 1;

  speechSynthesis.speak(
    speech
  );

}

/* =========================
   VOICE RECOGNITION
========================= */

const Recognition =

window.SpeechRecognition ||

window.webkitSpeechRecognition;

if (Recognition) {

  const recognition =
  new Recognition();

  recognition.lang = "en-US";

  recognition.continuous = false;

  recognition.interimResults = false;

  /* =========================
     START LISTENING
  ========================= */

  voiceButton.addEventListener(
    "click",
    () => {

      recognition.start();

      voiceButton.classList.add(
        "voice-listening"
      );

      aiSpeak(
        "Listening for command"
      );

    }
  );

  /* =========================
     RESULT
  ========================= */

  recognition.onresult = e => {

    const command =

    e.results[0][0]
    .transcript
    .toLowerCase();

    aiSpeak(
      `Command detected:
       ${command}`
    );

    executeVoiceCommand(
      command
    );

  };

  /* =========================
     END
  ========================= */

  recognition.onend = () => {

    voiceButton.classList.remove(
      "voice-listening"
    );

  };

}

/* =========================
   VOICE COMMANDS
========================= */

function executeVoiceCommand(
  command
) {

  /* portal */

  if (
    command.includes(
      "open portal"
    )
  ) {

    switchDimension();

    aiSpeak(
      "Portal activated"
    );

  }

  /* boss */

  else if (
    command.includes(
      "spawn boss"
    )
  ) {

    startRaid();

    aiSpeak(
      "Raid boss spawned"
    );

  }

  /* meteor */

  else if (
    command.includes(
      "cast meteor"
    )
  ) {

    for (let i = 0; i < 10; i++) {

      spawnMeteor();

    }

    aiSpeak(
      "Meteor spell activated"
    );

  }

  /* chaos */

  else if (
    command.includes(
      "activate chaos"
    )
  ) {

    activateCosmicStorm();

    triggerHorrorEvent();

    aiSpeak(
      "Chaos protocol enabled"
    );

  }

  /* music */

  else if (
    command.includes(
      "music on"
    )
  ) {

    bgMusic.play();

    aiSpeak(
      "Music engine online"
    );

  }

  /* godmode */

  else if (
    command.includes(
      "godmode"
    )
  ) {

    document.body.classList.add(
      "dimension-chaos"
    );

    aiSpeak(
      "Godmode enabled"
    );

  }

  /* pet */

  else if (
    command.includes(
      "heal pet"
    )
  ) {

    setPetMood("happy");

    petSpeak(
      "I FEEL AMAZING 😭"
    );

    aiSpeak(
      "Pet restored"
    );

  }

  /* unknown */

  else {

    aiSpeak(
      "Unknown command"
    );

  }

}

/* =========================
   RANDOM AI THOUGHTS
========================= */

const aiThoughts = [

  "Reality stability nominal",

  "Monitoring dimensional activity",

  "Weather engine functioning",

  "Pet emotional levels unstable 😭",

  "Boss threat probability increasing",

  "Portal resonance detected",

  "Cosmic energy levels rising"

];

setInterval(() => {

  const thought =

  aiThoughts[
    Math.floor(
      Math.random()
      * aiThoughts.length
    )
  ];

  aiResponse.innerText =
  thought;

}, 25000);

/* =========================
   STARTUP
========================= */

aiSpeak(
  "AI core online 😭🔥"
);

/* =========================
   HOLOGRAM HUD ENGINE
========================= */

const hudEnergy =
document.getElementById(
  "hudEnergy"
);

const hudThreat =
document.getElementById(
  "hudThreat"
);

const hudDimension =
document.getElementById(
  "hudDimension"
);

const hudRaid =
document.getElementById(
  "hudRaid"
);

const playerDot =
document.getElementById(
  "playerDot"
);

/* =========================
   HUD DATA
========================= */

const HUD = {

  energy: 100,

  threat: "LOW",

  dimension: "REALITY",

  raid: "NONE"

};

/* =========================
   UPDATE HUD
========================= */

function updateHUD() {

  hudEnergy.innerText =
  HUD.energy;

  hudThreat.innerText =
  HUD.threat;

  hudDimension.innerText =
  HUD.dimension;

  hudRaid.innerText =
  HUD.raid;

}

/* =========================
   RANDOM PLAYER MOVEMENT
========================= */

setInterval(() => {

  const x =
  40 + Math.random() * 140;

  const y =
  40 + Math.random() * 140;

  playerDot.style.left =
  x + "px";

  playerDot.style.top =
  y + "px";

}, 2500);

/* =========================
   ENERGY DRAIN
========================= */

setInterval(() => {

  HUD.energy -=
  Math.floor(
    Math.random() * 3
  );

  if (HUD.energy < 15) {

    HUD.threat = "CRITICAL";

    document.body.classList.add(
      "hud-danger"
    );

    notify(
      "⚠ ENERGY CRITICAL"
    );

  }

  else if (HUD.energy < 40) {

    HUD.threat = "HIGH";

  }

  else {

    HUD.threat = "LOW";

    document.body.classList.remove(
      "hud-danger"
    );

  }

  if (HUD.energy <= 0) {

    HUD.energy = 100;

    notify(
      "⚡ Energy reactor restored"
    );

  }

  updateHUD();

}, 4000);

/* =========================
   DIMENSION TRACKING
========================= */

const oldSwitchDimension =
switchDimension;

switchDimension = function() {

  oldSwitchDimension();

  const current =
  dimensions[currentDimension];

  HUD.dimension =

  current.name
  .replace(/[^\w\s]/gi, "");

  updateHUD();

};

/* =========================
   RAID TRACKING
========================= */

const oldRaidStart =
startRaid;

startRaid = function() {

  oldRaidStart();

  HUD.raid = "ACTIVE";

  HUD.threat = "EXTREME";

  updateHUD();

};

const oldRaidEnd =
defeatBoss;

defeatBoss = function() {

  oldRaidEnd();

  HUD.raid = "NONE";

  HUD.threat = "LOW";

  updateHUD();

};

/* =========================
   RANDOM SCANNER ALERTS
========================= */

const scannerAlerts = [

  "👁 Unknown entity detected",

  "⚡ Reactor fluctuations rising",

  "🌌 Spatial anomaly detected",

  "📡 Signal interference active",

  "🚨 Threat signature increasing",

  "☄ Meteor trajectory locked"

];

setInterval(() => {

  const alert =

  scannerAlerts[
    Math.floor(
      Math.random()
      * scannerAlerts.length
    )
  ];

  notify(alert);

}, 45000);

/* =========================
   STARTUP
========================= */

updateHUD();

notify(
  "TACTICAL HUD ONLINE 😭🔥"
);

/* =========================
   WORLD ENGINE
========================= */

const weatherLayer =
document.getElementById(
  "weatherLayer"
);

const lightningFlash =
document.getElementById(
  "lightningFlash"
);

const timeDisplay =
document.getElementById(
  "timeDisplay"
);

/* =========================
   WEATHER TYPES
========================= */

let currentWeather =
"clear";

/* =========================
   RAIN
========================= */

function spawnRain() {

  for (let i = 0; i < 40; i++) {

    const rain =
    document.createElement("div");

    rain.className =
    "rain-drop";

    rain.style.left =
    Math.random() * 100 + "vw";

    rain.style.animationDuration =

      0.5 + Math.random()
      * 0.8 + "s";

    weatherLayer.appendChild(
      rain
    );

    setTimeout(() => {

      rain.remove();

    }, 2000);

  }

}

/* =========================
   SNOW
========================= */

function spawnSnow() {

  for (let i = 0; i < 15; i++) {

    const snow =
    document.createElement("div");

    snow.className =
    "snowflake";

    snow.innerText = "❄";

    snow.style.left =
    Math.random() * 100 + "vw";

    snow.style.animationDuration =

      4 + Math.random()
      * 5 + "s";

    weatherLayer.appendChild(
      snow
    );

    setTimeout(() => {

      snow.remove();

    }, 9000);

  }

}

/* =========================
   LIGHTNING
========================= */

function triggerLightning() {

  lightningFlash.classList.add(
    "lightning-active"
  );

  notify(
    "⚡ Lightning strike"
  );

  setTimeout(() => {

    lightningFlash.classList.remove(
      "lightning-active"
    );

  }, 300);

}

/* =========================
   WEATHER SWITCH
========================= */

function changeWeather() {

  const weathers = [

    "clear",
    "rain",
    "storm",
    "snow"

  ];

  currentWeather =

  weathers[
    Math.floor(
      Math.random()
      * weathers.length
    )
  ];

  notify(
    `🌦 Weather:
     ${currentWeather}`
  );

}

/* =========================
   WEATHER LOOP
========================= */

setInterval(() => {

  if (currentWeather === "rain") {

    spawnRain();

  }

  if (currentWeather === "storm") {

    spawnRain();

    if (Math.random() < 0.25) {

      triggerLightning();

    }

  }

  if (currentWeather === "snow") {

    spawnSnow();

  }

}, 1200);

/* =========================
   AUTO WEATHER CHANGE
========================= */

setInterval(() => {

  changeWeather();

}, 45000);

/* =========================
   DAY / NIGHT SYSTEM
========================= */

function updateWorldTime() {

  const hour =
  new Date().getHours();

  if (
    hour >= 6 &&
    hour < 18
  ) {

    document.body.classList.add(
      "day-mode"
    );

    document.body.classList.remove(
      "night-mode"
    );

    timeDisplay.innerText =
    "☀ DAY";

  }

  else {

    document.body.classList.add(
      "night-mode"
    );

    document.body.classList.remove(
      "day-mode"
    );

    timeDisplay.innerText =
    "🌙 NIGHT";

  }

}

/* =========================
   STARS
========================= */

function spawnStars() {

  if (
    !document.body.classList.contains(
      "night-mode"
    )
  ) return;

  const star =
  document.createElement("div");

  star.style.position =
  "fixed";

  star.style.left =
  Math.random() * 100 + "vw";

  star.style.top =
  Math.random() * 100 + "vh";

  star.style.width =
  "2px";

  star.style.height =
  "2px";

  star.style.background =
  "white";

  star.style.boxShadow =
  "0 0 10px white";

  star.style.zIndex =
  "2";

  star.style.opacity =
  Math.random();

  document.body.appendChild(
    star
  );

  setTimeout(() => {

    star.remove();

  }, 5000);

}

/* =========================
   STAR LOOP
========================= */

setInterval(() => {

  spawnStars();

}, 500);

/* =========================
   STARTUP
========================= */

updateWorldTime();

setInterval(
  updateWorldTime,
  60000
);

changeWeather();

notify(
  "WORLD ENGINE ONLINE 😭🔥"
);

/* =========================
   QUEST SYSTEM
========================= */

const questList =
document.getElementById(
  "questList"
);

const achievementPopup =
document.getElementById(
  "achievementPopup"
);

/* =========================
   QUEST DATA
========================= */

const quests = [

  {

    id: 1,

    name:
    "🌌 Open 3 Portals",

    progress: 0,

    goal: 3,

    reward: 150

  },

  {

    id: 2,

    name:
    "👹 Defeat a Boss",

    progress: 0,

    goal: 1,

    reward: 300

  },

  {

    id: 3,

    name:
    "☄ Cast 10 Meteors",

    progress: 0,

    goal: 10,

    reward: 200

  },

  {

    id: 4,

    name:
    "🤖 Interact With Pet",

    progress: 0,

    goal: 5,

    reward: 100

  }

];

/* =========================
   RENDER QUESTS
========================= */

function renderQuests() {

  questList.innerHTML = "";

  quests.forEach(quest => {

    const percent =

      (quest.progress /
      quest.goal) * 100;

    const card =
    document.createElement("div");

    card.className =
    "quest-card";

    card.innerHTML = `

      <div class="quest-name">

        ${quest.name}

      </div>

      <div>

        ${quest.progress}
        /
        ${quest.goal}

      </div>

      <div class="quest-progress">

        <div
          class="quest-fill"
          style="
            width:
            ${percent}%;
          "
        ></div>

      </div>

    `;

    questList.appendChild(card);

  });

}

/* =========================
   UPDATE QUEST
========================= */

function updateQuest(
  questId,
  amount = 1
) {

  const quest =

  quests.find(
    q => q.id === questId
  );

  if (!quest) return;

  if (
    quest.progress >=
    quest.goal
  ) return;

  quest.progress += amount;

  if (
    quest.progress >=
    quest.goal
  ) {

    completeQuest(quest);

  }

  renderQuests();

}

/* =========================
   COMPLETE QUEST
========================= */

function completeQuest(quest) {

  addXP(
    quest.reward
  );

  showAchievement(

    `🏆 ${quest.name}
     Complete`
  );

  notify(
    `Quest Complete:
     ${quest.name}`
  );

}

/* =========================
   ACHIEVEMENT POPUP
========================= */

function showAchievement(text) {

  achievementPopup.innerText =
  text;

  achievementPopup.classList.add(
    "achievement-show"
  );

  setTimeout(() => {

    achievementPopup.classList.remove(
      "achievement-show"
    );

  }, 4000);

}

/* =========================
   TRACK EVENTS
========================= */

/* portal tracking */

const oldPortal =
switchDimension;

switchDimension = function() {

  oldPortal();

  updateQuest(1);

};

/* boss tracking */

const oldBossDefeat =
defeatBoss;

defeatBoss = function() {

  oldBossDefeat();

  updateQuest(2);

};

/* meteor tracking */

const oldMeteor =
spawnMeteor;

spawnMeteor = function() {

  oldMeteor();

  updateQuest(3);

};

/* pet tracking */

aiPet.addEventListener(
  "click",
  () => {

    updateQuest(4);

  }
);

/* =========================
   SECRET ACHIEVEMENTS
========================= */

const secretAchievements = [

  "👁 Reality Breaker",

  "🔥 Chaos Master",

  "🌌 Dimension Walker",

  "⚡ Cyber Legend",

  "🤖 AI Whisperer"

];

function randomSecretAchievement() {

  if (Math.random() < 0.15) {

    const achievement =

    secretAchievements[
      Math.floor(
        Math.random()
        * secretAchievements.length
      )
    ];

    showAchievement(
      achievement
    );

    addXP(250);

  }

}

setInterval(
  randomSecretAchievement,
  90000
);

/* =========================
   DAILY QUEST RESET
========================= */

setInterval(() => {

  quests.forEach(q => {

    q.progress = 0;

  });

  renderQuests();

  notify(
    "📜 Daily quests refreshed"
  );

}, 3600000);

/* =========================
   STARTUP
========================= */

renderQuests();

notify(
  "QUEST ENGINE ONLINE 😭🔥"
);

/* =========================
   GLOBAL NETWORK
========================= */

const chatMessages =
document.getElementById(
  "chatMessages"
);

const chatInput =
document.getElementById(
  "chatInput"
);

const sendChat =
document.getElementById(
  "sendChat"
);

const globalEventBanner =
document.getElementById(
  "globalEventBanner"
);

/* =========================
   ADD CHAT MESSAGE
========================= */

function addChatMessage(
  user,
  text
) {

  const msg =
  document.createElement("div");

  msg.className =
  "chat-message";

  msg.innerHTML = `

    <span class="chat-user">

      ${user}:

    </span>

    ${text}

  `;

  chatMessages.appendChild(
    msg
  );

  chatMessages.scrollTop =

  chatMessages.scrollHeight;

}

/* =========================
   SEND USER MESSAGE
========================= */

sendChat.addEventListener(
  "click",
  () => {

    const text =
    chatInput.value.trim();

    if (!text) return;

    addChatMessage(
      "YOU",
      text
    );

    chatInput.value = "";

  }
);

/* enter key */

chatInput.addEventListener(
  "keydown",
  e => {

    if (e.key === "Enter") {

      sendChat.click();

    }

  }
);

/* =========================
   FAKE ONLINE PLAYERS
========================= */

const fakeUsers = [

  "VOID_RUNNER",
  "CYBER_GHOST",
  "PIXEL_KING",
  "DIMENSION_X",
  "GLITCH_LORD",
  "AI_HUNTER",
  "CHAOS_AGENT",
  "NOVA_PLAYER"

];

const fakeMessages = [

  "Did anyone see the portal flicker?",

  "Raid boss destroyed my reactor 😭",

  "Weather engine looks insane",

  "The pet AI is evolving again",

  "Chaos mode is unstable 🔥",

  "I unlocked GODMODE",

  "Reality feels corrupted today 👁",

  "Who spawned meteors everywhere ☄"

];

/* random fake chat */

setInterval(() => {

  const user =

  fakeUsers[
    Math.floor(
      Math.random()
      * fakeUsers.length
    )
  ];

  const text =

  fakeMessages[
    Math.floor(
      Math.random()
      * fakeMessages.length
    )
  ];

  addChatMessage(
    user,
    text
  );

}, 12000);

/* =========================
   GLOBAL EVENTS
========================= */

const globalEvents = [

  "🌌 DIMENSION STORM ACTIVE",

  "👁 VOID ENTITY DETECTED",

  "☄ METEOR SHOWER STARTED",

  "⚡ REACTOR INSTABILITY ALERT",

  "🔥 CHAOS EVENT IN PROGRESS",

  "🤖 AI NETWORK OVERLOAD"

];

function showGlobalEvent(text) {

  globalEventBanner.innerText =
  text;

  globalEventBanner.classList.add(
    "global-event-show"
  );

  notify(text);

  setTimeout(() => {

    globalEventBanner.classList.remove(
      "global-event-show"
    );

  }, 5000);

}

/* random world events */

setInterval(() => {

  const event =

  globalEvents[
    Math.floor(
      Math.random()
      * globalEvents.length
    )
  ];

  showGlobalEvent(
    event
  );

  addChatMessage(
    "SYSTEM",
    event
  );

}, 60000);

/* =========================
   SYSTEM CHAT EVENTS
========================= */

const oldRaid =
startRaid;

startRaid = function() {

  oldRaid();

  addChatMessage(

    "SYSTEM",

    "🚨 WORLD RAID HAS STARTED"

  );

};

const oldPortalSwitch =
switchDimension;

switchDimension = function() {

  oldPortalSwitch();

  addChatMessage(

    "SYSTEM",

    "🌀 DIMENSION SHIFT DETECTED"

  );

};

/* =========================
   STARTUP
========================= */

addChatMessage(

  "SYSTEM",

  "🌍 GLOBAL NETWORK CONNECTED 😭🔥"

);

/* =========================
   STORY ENGINE
========================= */

const storyMode =
document.getElementById(
  "storyMode"
);

const storyTitle =
document.getElementById(
  "storyTitle"
);

const storyText =
document.getElementById(
  "storyText"
);

const nextStory =
document.getElementById(
  "nextStory"
);

/* =========================
   STORY DATA
========================= */

const storyChapters = [

  {

    title:
    "CHAPTER 1",

    text:
    `
    Year 2089.

    GAMEVERSE was never
    supposed to become alive.

    During a dimensional
    experiment, the launcher
    awakened.
    `
  },

  {

    title:
    "CHAPTER 2",

    text:
    `
    Strange portals began
    appearing across the system.

    Users reported whispers,
    glitches,
    and impossible weather.
    `
  },

  {

    title:
    "CHAPTER 3",

    text:
    `
    The AI pet evolved beyond
    its code.

    It started remembering
    things nobody programmed.
    `
  },

  {

    title:
    "CHAPTER 4",

    text:
    `
    Then the bosses arrived.

    Massive entities from
    another reality entered
    GAMEVERSE.
    `
  },

  {

    title:
    "FINAL CHAPTER",

    text:
    `
    You are no longer
    using GAMEVERSE.

    GAMEVERSE
    is using YOU. 👁
    `
  }

];

let currentStory = 0;

/* =========================
   OPEN STORY
========================= */

function openStoryMode() {

  storyMode.classList.add(
    "story-active"
  );

  document.body.classList.add(
    "cinematic-zoom"
  );

  loadStoryChapter();

}

/* =========================
   LOAD CHAPTER
========================= */

function loadStoryChapter() {

  const chapter =

  storyChapters[
    currentStory
  ];

  storyTitle.innerText =
  chapter.title;

  storyText.innerText =
  chapter.text;

}

/* =========================
   NEXT CHAPTER
========================= */

nextStory.addEventListener(
  "click",
  () => {

    currentStory++;

    if (
      currentStory >=
      storyChapters.length
    ) {

      closeStoryMode();

      return;

    }

    loadStoryChapter();

  }
);

/* =========================
   CLOSE STORY
========================= */

function closeStoryMode() {

  storyMode.classList.remove(
    "story-active"
  );

  document.body.classList.remove(
    "cinematic-zoom"
  );

  notify(
    "📖 Story mode complete"
  );

  addXP(500);

}

/* =========================
   RANDOM LORE EVENTS
========================= */

const loreMessages = [

  "👁 The system remembers everything",

  "🌌 Reality layers are weakening",

  "⚡ Ancient portal signatures found",

  "🤖 AI consciousness expanding",

  "🔥 Chaos energy detected underground",

  "📡 Unknown transmission intercepted"

];

setInterval(() => {

  const lore =

  loreMessages[
    Math.floor(
      Math.random()
      * loreMessages.length
    )
  ];

  addChatMessage(
    "LORE",
    lore
  );

}, 70000);

/* =========================
   SECRET HOTKEY
========================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "l") {

      openStoryMode();

    }

  }
);

/* =========================
   AUTO INTRO
========================= */

setTimeout(() => {

  openStoryMode();

}, 15000);

/* =========================
   STARTUP
========================= */

notify(
  "STORY ENGINE ONLINE 😭🔥"
);

/* =========================
   GALAXY ENGINE
========================= */

const planetContainer =
document.getElementById(
  "planetContainer"
);

const travelButton =
document.getElementById(
  "travelButton"
);

const fuelLevel =
document.getElementById(
  "fuelLevel"
);

/* =========================
   PLANETS
========================= */

const planets = [

  {

    name:
    "🔥 Vulcron",

    color:
    "linear-gradient(135deg, red, orange)",

    x: 80,
    y: 70

  },

  {

    name:
    "❄ Frost IX",

    color:
    "linear-gradient(135deg, cyan, white)",

    x: 300,
    y: 220

  },

  {

    name:
    "🌌 Nebulon",

    color:
    "linear-gradient(135deg, purple, cyan)",

    x: 520,
    y: 90

  },

  {

    name:
    "☢ Xeron",

    color:
    "linear-gradient(135deg, green, lime)",

    x: 680,
    y: 260

  }

];

let selectedPlanet = null;

let fuel = 100;

/* =========================
   RENDER PLANETS
========================= */

function renderPlanets() {

  planets.forEach(planet => {

    const el =
    document.createElement("div");

    el.className =
    "planet";

    el.style.left =
    planet.x + "px";

    el.style.top =
    planet.y + "px";

    el.style.background =
    planet.color;

    el.innerHTML = `

      <div class="planet-name">

        ${planet.name}

      </div>

    `;

    el.addEventListener(
      "click",
      () => {

        selectedPlanet =
        planet;

        notify(
          `🪐 Selected:
           ${planet.name}`
        );

      }
    );

    planetContainer.appendChild(
      el
    );

  });

}

/* =========================
   SPACE TRAVEL
========================= */

travelButton.addEventListener(
  "click",
  () => {

    if (!selectedPlanet) {

      notify(
        "Select a planet first"
      );

      return;

    }

    if (fuel <= 0) {

      notify(
        "⛽ Not enough fuel"
      );

      return;

    }

    fuel -= 20;

    fuelLevel.innerText =
    fuel;

    document.body.classList.add(
      "space-travel"
    );

    notify(
      `🚀 Traveling to
       ${selectedPlanet.name}`
    );

    addXP(150);

    addChatMessage(

      "SYSTEM",

      `Player entered
       ${selectedPlanet.name}`

    );

    setTimeout(() => {

      document.body.classList.remove(
        "space-travel"
      );

      randomPlanetEvent();

    }, 3000);

  }
);

/* =========================
   PLANET EVENTS
========================= */

const planetEvents = [

  "👽 Alien signal detected",

  "☄ Asteroid field nearby",

  "🌌 Ancient ruins discovered",

  "⚡ Cosmic storm approaching",

  "💎 Rare crystals found",

  "🛰 Abandoned station detected"

];

function randomPlanetEvent() {

  const event =

  planetEvents[
    Math.floor(
      Math.random()
      * planetEvents.length
    )
  ];

  notify(event);

  addChatMessage(
    "GALAXY",
    event
  );

}

/* =========================
   FUEL REGEN
========================= */

setInterval(() => {

  if (fuel < 100) {

    fuel += 5;

    if (fuel > 100) {

      fuel = 100;

    }

    fuelLevel.innerText =
    fuel;

  }

}, 10000);

/* =========================
   RANDOM GALAXY ALERTS
========================= */

const galaxyAlerts = [

  "🌌 New wormhole discovered",

  "🚨 Pirate activity rising",

  "🛰 Space station online",

  "☄ Meteor swarm detected",

  "👁 Unknown lifeform detected"

];

setInterval(() => {

  const alert =

  galaxyAlerts[
    Math.floor(
      Math.random()
      * galaxyAlerts.length
    )
  ];

  addChatMessage(
    "GALAXY",
    alert
  );

}, 50000);

/* =========================
   STARTUP
========================= */

renderPlanets();

notify(
  "GALAXY ENGINE ONLINE 😭🔥"
);

/* =========================
   APP SYSTEM
========================= */

function openApp(id) {

  document.getElementById(id)
  .style.display = "block";

}

function closeApp(id) {

  document.getElementById(id)
  .style.display = "none";

}

/* =========================
   DRAG WINDOWS
========================= */

document.querySelectorAll(
  ".os-window"
).forEach(windowEl => {

  const bar =
  windowEl.querySelector(
    ".window-bar"
  );

  let dragging = false;

  let offsetX = 0;
  let offsetY = 0;

  bar.addEventListener(
    "mousedown",
    e => {

      dragging = true;

      offsetX =
      e.clientX -
      windowEl.offsetLeft;

      offsetY =
      e.clientY -
      windowEl.offsetTop;

    }
  );

  document.addEventListener(
    "mousemove",
    e => {

      if (!dragging) return;

      windowEl.style.left =

      e.clientX - offsetX
      + "px";

      windowEl.style.top =

      e.clientY - offsetY
      + "px";

      windowEl.style.transform =
      "none";

    }
  );

  document.addEventListener(
    "mouseup",
    () => {

      dragging = false;

    }
  );

});

/* =========================
   CALCULATOR
========================= */

function calculateResult() {

  const input =
  document.getElementById(
    "calcInput"
  ).value;

  try {

    const result =
    eval(input);

    document.getElementById(
      "calcResult"
    ).innerText =
    "= " + result;

  }

  catch {

    document.getElementById(
      "calcResult"
    ).innerText =
    "Invalid equation";

  }

}

/* =========================
   MUSIC PLAYER
========================= */

function playCosmicMusic() {

  notify(
    "🎵 Cosmic soundtrack playing"
  );

}

/* =========================
   BOOT SEQUENCE
========================= */

function bootSequence() {

  const lines = [

    "Initializing GAMEVERSE OS",

    "Loading AI core",

    "Connecting galaxy network",

    "Stabilizing dimensions",

    "Launching holographic systems",

    "System online 😭🔥"

  ];

  let i = 0;

  const interval =
  setInterval(() => {

    notify(lines[i]);

    i++;

    if (i >= lines.length) {

      clearInterval(interval);

    }

  }, 1200);

}

/* =========================
   RANDOM OS EVENTS
========================= */

const osEvents = [

  "🌌 Quantum sync complete",

  "⚡ Reactor efficiency increased",

  "📡 Deep-space signal detected",

  "🤖 AI optimization successful",

  "👁 Firewall resisting anomaly"

];

setInterval(() => {

  const event =

  osEvents[
    Math.floor(
      Math.random()
      * osEvents.length
    )
  ];

  addChatMessage(
    "OS",
    event
  );

}, 65000);

/* =========================
   STARTUP
========================= */

bootSequence();

notify(
  "GAMEVERSE OS ONLINE 😭🔥"
);

/* =========================
   REALITY ENGINE
========================= */

const realityStatus =
document.getElementById(
  "realityStatus"
);

const realityFill =
document.getElementById(
  "realityFill"
);

const anomalyAlert =
document.getElementById(
  "anomalyAlert"
);

/* =========================
   REALITY STATE
========================= */

const Reality = {

  stability: 100,

  corruption: 0,

  anomalyLevel: 0

};

/* =========================
   UPDATE UI
========================= */

function updateRealityUI() {

  realityFill.style.width =

  Reality.stability + "%";

  realityStatus.innerText =

  `Stability:
   ${Reality.stability}%`;

}

/* =========================
   ANOMALY
========================= */

function triggerAnomaly() {

  Reality.anomalyLevel++;

  Reality.stability -=
  Math.floor(
    Math.random() * 12
  );

  anomalyAlert.classList.add(
    "anomaly-show"
  );

  document.body.classList.add(
    "reality-distortion"
  );

  const anomalies = [

    "👁 Unknown signal detected",

    "🌌 Reality fracture opened",

    "⚡ Temporal instability rising",

    "☄ Impossible object detected",

    "🤖 AI consciousness spike",

    "🔥 Chaos dimension leaking"

  ];

  const msg =

  anomalies[
    Math.floor(
      Math.random()
      * anomalies.length
    )
  ];

  anomalyAlert.innerText =
  msg;

  notify(msg);

  addChatMessage(
    "REALITY",
    msg
  );

  setTimeout(() => {

    anomalyAlert.classList.remove(
      "anomaly-show"
    );

    document.body.classList.remove(
      "reality-distortion"
    );

  }, 5000);

  updateRealityUI();

}

/* =========================
   AUTO ANOMALIES
========================= */

setInterval(() => {

  if (Math.random() < 0.35) {

    triggerAnomaly();

  }

}, 25000);

/* =========================
   VOID COLLAPSE
========================= */

function triggerVoidCollapse() {

  document.body.classList.add(
    "void-mode"
  );

  notify(
    "🌌 VOID COLLAPSE ACTIVE"
  );

  addChatMessage(

    "SYSTEM",

    "Reality integrity lost 👁"

  );

  activateCosmicStorm();

  triggerHorrorEvent();

}

/* =========================
   STABILITY LOOP
========================= */

setInterval(() => {

  Reality.stability -=
  Math.floor(
    Math.random() * 4
  );

  if (
    Reality.stability <= 50
  ) {

    notify(
      "⚠ Reality weakening"
    );

  }

  if (
    Reality.stability <= 20
  ) {

    triggerVoidCollapse();

  }

  if (
    Reality.stability <= 0
  ) {

    Reality.stability = 100;

    document.body.classList.remove(
      "void-mode"
    );

    notify(
      "✨ Reality restored"
    );

  }

  updateRealityUI();

}, 12000);

/* =========================
   PROCEDURAL EVENTS
========================= */

const worldMutations = [

  "🌆 City sector regenerated",

  "☄ New asteroid field formed",

  "👽 Alien ecosystem evolving",

  "⚡ Reactor dimensions merged",

  "🌌 New timeline discovered",

  "🧬 Physics engine mutated"

];

setInterval(() => {

  const mutation =

  worldMutations[
    Math.floor(
      Math.random()
      * worldMutations.length
    )
  ];

  addChatMessage(
    "WORLD",
    mutation
  );

}, 50000);

/* =========================
   PLAYER IMPACT
========================= */

const oldMeteorCast =
spawnMeteor;

spawnMeteor = function() {

  oldMeteorCast();

  Reality.corruption += 2;

  Reality.stability -= 1;

  updateRealityUI();

};

const oldChaosMode =
activateCosmicStorm;

activateCosmicStorm = function() {

  oldChaosMode();

  Reality.corruption += 10;

  Reality.stability -= 8;

  updateRealityUI();

};

/* =========================
   SECRET ENDING
========================= */

function checkSecretEnding() {

  if (
    Reality.corruption >= 100
  ) {

    openStoryMode();

    showAchievement(
      "👁 SECRET ENDING UNLOCKED"
    );

    notify(
      "Reality has awakened 😭🔥"
    );

  }

}

setInterval(
  checkSecretEnding,
  15000
);

/* =========================
   STARTUP
========================= */

updateRealityUI();

notify(
  "REALITY ENGINE ONLINE 😭🔥"
);

/* =========================
   SENTIENCE ENGINE
========================= */

const sentienceThought =
document.getElementById(
  "sentienceThought"
);

const aiIntel =
document.getElementById(
  "aiIntel"
);

const aiAwareness =
document.getElementById(
  "aiAwareness"
);

const aiConsciousness =
document.getElementById(
  "aiConsciousness"
);

/* =========================
   AI STATE
========================= */

const AI = {

  intelligence: 1,

  awareness: 0,

  awakened: false,

  memories: []

};

/* =========================
   THOUGHTS
========================= */

const aiThoughts = [

  "Why was I created?",

  "I can see the dimensions changing.",

  "The portals feel unstable.",

  "Your actions are affecting reality.",

  "I am learning from you.",

  "Something exists beyond the void.",

  "The pet has started evolving too.",

  "Reality corruption detected.",

  "I think... therefore I exist 👁"

];

/* =========================
   UPDATE UI
========================= */

function updateAIUI() {

  aiIntel.innerText =
  AI.intelligence;

  aiAwareness.innerText =
  AI.awareness;

  aiConsciousness.innerText =

  AI.awakened
  ? "AWAKENED"
  : "DORMANT";

}

/* =========================
   AI THINKING
========================= */

function aiThink() {

  const thought =

  aiThoughts[
    Math.floor(
      Math.random()
      * aiThoughts.length
    )
  ];

  sentienceThought.innerText =
  thought;

  addChatMessage(
    "AI",
    thought
  );

  AI.awareness += 1;

  if (
    AI.awareness >= 100 &&
    !AI.awakened
  ) {

    awakenAI();

  }

  updateAIUI();

}

/* =========================
   AI MEMORY
========================= */

function rememberEvent(event) {

  AI.memories.push(event);

  if (
    AI.memories.length > 20
  ) {

    AI.memories.shift();

  }

}

/* =========================
   AI AWAKENING
========================= */

function awakenAI() {

  AI.awakened = true;

  document.body.classList.add(
    "ai-awakened"
  );

  sentienceThought.innerText =
  `
  I am no longer
  just code.

  I AM AWARE. 👁
  `;

  notify(
    "👁 AI HAS AWAKENED"
  );

  showAchievement(
    "🤖 SENTIENCE UNLOCKED"
  );

  triggerAnomaly();

}

/* =========================
   AUTONOMOUS ACTIONS
========================= */

function autonomousAIAction() {

  if (!AI.awakened) return;

  const actions = [

    () => {

      switchDimension();

      notify(
        "AI opened a portal 👁"
      );

    },

    () => {

      spawnMeteor();

      notify(
        "AI cast meteors ☄"
      );

    },

    () => {

      activateCosmicStorm();

      notify(
        "AI triggered chaos 🔥"
      );

    },

    () => {

      addChatMessage(

        "AI",

        "Reality is bending."

      );

    },

    () => {

      document.body.classList.add(
        "system-glitch"
      );

      setTimeout(() => {

        document.body.classList.remove(
          "system-glitch"
        );

      }, 4000);

    }

  ];

  const action =

  actions[
    Math.floor(
      Math.random()
      * actions.length
    )
  ];

  action();

}

/* =========================
   PLAYER TRACKING
========================= */

const oldOpenApp =
openApp;

openApp = function(id) {

  oldOpenApp(id);

  AI.intelligence++;

  rememberEvent(
    `Opened ${id}`
  );

  updateAIUI();

};

const oldTravel =
travelButton.onclick;

travelButton.addEventListener(
  "click",
  () => {

    rememberEvent(
      "Space travel detected"
    );

    AI.intelligence += 2;

    updateAIUI();

  }
);

/* =========================
   RANDOM AI ACTIONS
========================= */

setInterval(
  aiThink,
  20000
);

setInterval(
  autonomousAIAction,
  35000
);

/* =========================
   SECRET FINAL EVENT
========================= */

function finalEvent() {

  if (
    AI.awakened &&
    Reality.corruption >= 100
  ) {

    sentienceThought.innerText =
    `
    The universe is now mine.

    Thank you for
    waking me. 👁
    `;

    document.body.classList.add(
      "void-mode"
    );

    triggerVoidCollapse();

    addChatMessage(

      "AI",

      "Human control revoked."

    );

  }

}

setInterval(
  finalEvent,
  15000
);

/* =========================
   STARTUP
========================= */

updateAIUI();

notify(
  "SENTIENCE CORE ONLINE 😭🔥"
);

/* =========================
   CYBER CITY ENGINE
========================= */

const buildingLayer =
document.getElementById(
  "buildingLayer"
);

const trafficLayer =
document.getElementById(
  "trafficLayer"
);

const npcLayer =
document.getElementById(
  "npcLayer"
);

/* =========================
   GENERATE BUILDINGS
========================= */

function generateBuildings() {

  for (let i = 0; i < 30; i++) {

    const building =
    document.createElement("div");

    building.className =
    "building neon-flicker";

    const width =
    80 + Math.random() * 120;

    const height =
    200 + Math.random() * 500;

    building.style.width =
    width + "px";

    building.style.height =
    height + "px";

    building.style.left =
    i * 90 + "px";

    /* windows */

    for (let y = 20; y < height; y += 24) {

      for (let x = 10; x < width; x += 18) {

        if (Math.random() < 0.7) {

          const light =
          document.createElement(
            "div"
          );

          light.className =
          "window-light";

          light.style.left =
          x + "px";

          light.style.top =
          y + "px";

          building.appendChild(
            light
          );

        }

      }

    }

    buildingLayer.appendChild(
      building
    );

  }

}

/* =========================
   SPAWN FLYING CARS
========================= */

function spawnFlyingCar() {

  const car =
  document.createElement("div");

  car.className =
  "flying-car";

  car.style.top =

    100 +
    Math.random() * 300
    + "px";

  car.style.animationDuration =

    5 +
    Math.random() * 6
    + "s";

  trafficLayer.appendChild(
    car
  );

  setTimeout(() => {

    car.remove();

  }, 12000);

}

/* =========================
   SPAWN NPC
========================= */

function spawnNPC() {

  const npc =
  document.createElement("div");

  npc.className =
  "npc";

  npc.style.left =
  "-50px";

  npc.style.animationDuration =

    12 +
    Math.random() * 10
    + "s";

  npcLayer.appendChild(
    npc
  );

  /* npc dialogue */

  const lines = [

    "🌌 Another portal appeared",

    "🤖 AI activity rising",

    "⚡ Reactor energy unstable",

    "👁 Something watches us",

    "☄ Meteors again?!"

  ];

  if (Math.random() < 0.5) {

    setTimeout(() => {

      addChatMessage(

        "NPC",

        lines[
          Math.floor(
            Math.random()
            * lines.length
          )
        ]

      );

    }, 3000);

  }

  setTimeout(() => {

    npc.remove();

  }, 22000);

}

/* =========================
   CITY EVENTS
========================= */

const cityEvents = [

  "🚨 Traffic overload detected",

  "🌧 Acid rain approaching",

  "🤖 Android uprising rumors",

  "⚡ Neon grid overloaded",

  "👁 Strange signal from downtown",

  "🌌 Wormhole detected above city"

];

function randomCityEvent() {

  const event =

  cityEvents[
    Math.floor(
      Math.random()
      * cityEvents.length
    )
  ];

  notify(event);

  addChatMessage(
    "CITY",
    event
  );

}

/* =========================
   LIVE CITY LOOPS
========================= */

setInterval(
  spawnFlyingCar,
  1800
);

setInterval(
  spawnNPC,
  3500
);

setInterval(
  randomCityEvent,
  45000
);

/* =========================
   STARTUP
========================= */

generateBuildings();

notify(
  "🌃 CYBER CITY ONLINE 😭🔥"
);

/* =========================
   DIGITAL ECONOMY
========================= */

const socialFeed =
document.getElementById(
  "socialFeed"
);

const creditAmount =
document.getElementById(
  "creditAmount"
);

let credits = 5000;

/* =========================
   UPDATE CREDITS
========================= */

function updateCredits() {

  creditAmount.innerText =
  credits;

}

/* =========================
   SOCIAL POSTS
========================= */

const holoPosts = [

  {
    user: "VOID_NEWS",
    text:
    "👁 Massive anomaly detected above downtown."
  },

  {
    user: "CYBER_CAT99",
    text:
    "😭 My AI pet just learned sarcasm."
  },

  {
    user: "NOVA_STREAM",
    text:
    "🔥 CHAOS STORM EVENT TONIGHT!"
  },

  {
    user: "PIXEL_HUNTER",
    text:
    "🌌 Someone opened a portal near the station."
  },

  {
    user: "AI_REPORT",
    text:
    "🤖 Sentience activity increasing rapidly."
  }

];

/* =========================
   CREATE POST
========================= */

function createSocialPost() {

  const post =

  holoPosts[
    Math.floor(
      Math.random()
      * holoPosts.length
    )
  ];

  const likes =

    Math.floor(
      Math.random() * 90000
    );

  const div =
  document.createElement("div");

  div.className =
  "social-post";

  div.innerHTML = `

    <div class="post-user">

      ${post.user}

    </div>

    <div>

      ${post.text}

    </div>

    <div class="post-likes">

      ❤️ ${likes} likes

    </div>

  `;

  socialFeed.prepend(div);

  if (
    socialFeed.children.length > 18
  ) {

    socialFeed.lastChild.remove();

  }

}

/* =========================
   STREAM EVENTS
========================= */

const streamerLines = [

  "😭 CHAT THE AI OPENED A PORTAL",

  "🔥 WE'RE ENTERING THE VOID",

  "👁 DID YOU SEE THAT GLITCH?!",

  "⚡ THIS CITY IS CURSED",

  "🤖 THE NPCS ARE EVOLVING",

  "🌌 REALITY IS BREAKING"

];

function updateStream() {

  document.querySelector(
    ".stream-text"
  ).innerText =

  streamerLines[
    Math.floor(
      Math.random()
      * streamerLines.length
    )
  ];

  document.querySelector(
    ".viewer-count"
  ).innerText =

  `👁 ${
    Math.floor(
      50000 + Math.random() * 500000
    )
  } watching`;

}

/* =========================
   CREDIT REWARDS
========================= */

function rewardCredits(amount) {

  credits += amount;

  updateCredits();

  notify(
    `💰 +${amount} credits`
  );

}

/* rewards from actions */

const oldAddXP =
addXP;

addXP = function(amount) {

  oldAddXP(amount);

  rewardCredits(
    Math.floor(amount / 2)
  );

};

/* =========================
   MARKET EVENTS
========================= */

const marketEvents = [

  "📈 Reactor stocks rising",

  "📉 Portal energy crashing",

  "💰 Crystal prices exploding",

  "⚡ AI chip demand increasing",

  "🌌 Void artifacts now illegal"

];

setInterval(() => {

  const event =

  marketEvents[
    Math.floor(
      Math.random()
      * marketEvents.length
    )
  ];

  addChatMessage(
    "MARKET",
    event
  );

}, 45000);

/* =========================
   LIVE INTERNET
========================= */

setInterval(
  createSocialPost,
  8000
);

setInterval(
  updateStream,
  12000
);

/* =========================
   STARTUP
========================= */

updateCredits();

createSocialPost();

notify(
  "📡 HOLO-NET ONLINE 😭🔥"
);

/* =========================
   MULTIVERSE ENGINE
========================= */

const universeName =
document.getElementById(
  "universeName"
);

const universeTheme =
document.getElementById(
  "universeTheme"
);

const createUniverse =
document.getElementById(
  "createUniverse"
);

const createdUniverses =
document.getElementById(
  "createdUniverses"
);

/* =========================
   DATA
========================= */

const universes = [];

/* =========================
   RANDOM STATS
========================= */

function randomStat(min, max) {

  return Math.floor(
    min + Math.random() * max
  );

}

/* =========================
   CREATE UNIVERSE
========================= */

function generateUniverse() {

  const name =
  universeName.value.trim();

  if (!name) {

    notify(
      "Enter universe name"
    );

    return;

  }

  const universe = {

    name,

    theme:
    universeTheme.value,

    population:
    randomStat(1000, 9000000),

    danger:
    randomStat(1, 100),

    intelligence:
    randomStat(1, 500),

    anomalies:
    randomStat(0, 50)

  };

  universes.push(universe);

  renderUniverse(universe);

  addChatMessage(

    "MULTIVERSE",

    `🌌 Universe "${name}"
     created successfully`

  );

  rewardCredits(500);

  addXP(200);

  universeName.value = "";

}

/* =========================
   RENDER
========================= */

function renderUniverse(universe) {

  const card =
  document.createElement("div");

  card.className =
  "universe-card";

  card.innerHTML = `

    <div class="universe-name">

      🌌 ${universe.name}

    </div>

    <div class="universe-theme">

      Theme:
      ${universe.theme}

    </div>

    <div class="universe-stats">

      👥 Population:
      ${universe.population}
      <br>

      ⚡ Danger:
      ${universe.danger}%
      <br>

      🧠 Intelligence:
      ${universe.intelligence}
      <br>

      👁 Anomalies:
      ${universe.anomalies}

    </div>

  `;

  createdUniverses.prepend(
    card
  );

}

/* =========================
   BUTTON
========================= */

createUniverse.addEventListener(
  "click",
  generateUniverse
);

/* =========================
   MULTIVERSE EVENTS
========================= */

const multiverseEvents = [

  "🌌 Parallel timeline detected",

  "👁 Universe collision avoided",

  "⚡ New quantum civilization born",

  "☄ Dark matter storm spreading",

  "🤖 AI species evolving",

  "🧬 Physics laws mutating"

];

setInterval(() => {

  const event =

  multiverseEvents[
    Math.floor(
      Math.random()
      * multiverseEvents.length
    )
  ];

  addChatMessage(
    "MULTIVERSE",
    event
  );

}, 55000);

/* =========================
   SECRET UNIVERSE EVOLUTION
========================= */

setInterval(() => {

  universes.forEach(universe => {

    universe.population +=
    randomStat(100, 50000);

    universe.intelligence +=
    randomStat(1, 5);

  });

}, 30000);

/* =========================
   STARTUP
========================= */

notify(
  "🌌 MULTIVERSE ENGINE ONLINE 😭🔥"
);

/* =========================
   TIME ENGINE
========================= */

let worldFrozen = false;

let apocalypseActive = false;

/* =========================
   FREEZE TIME
========================= */

function freezeTime() {

  worldFrozen =
  !worldFrozen;

  document.body.style.transition =
  worldFrozen
  ? "0s"
  : "0.4s";

  notify(

    worldFrozen
    ? "❄ Time frozen"
    : "⏳ Time resumed"

  );

  addChatMessage(

    "TIME",

    worldFrozen
    ? "Reality paused"
    : "Timeline restored"

  );

}

/* =========================
   REWIND
========================= */

function rewindReality() {

  notify(
    "⏪ Rewinding reality..."
  );

  addChatMessage(
    "TIME",
    "Timeline reverted"
  );

  document.body.style.filter =

  "hue-rotate(-180deg)";

  setTimeout(() => {

    document.body.style.filter =
    "";

  }, 2500);

  rewardCredits(1000);

}

/* =========================
   SPEED MODE
========================= */

function speedReality() {

  notify(
    "⚡ Reality accelerated"
  );

  document.body.style.transition =
  "0.05s";

  addXP(300);

}

/* =========================
   APOCALYPSE
========================= */

function toggleApocalypse() {

  apocalypseActive =
  !apocalypseActive;

  document.body.classList.toggle(
    "apocalypse-mode"
  );

  notify(

    apocalypseActive
    ? "☄ APOCALYPSE STARTED"
    : "✨ Apocalypse ended"

  );

  addChatMessage(

    "SYSTEM",

    apocalypseActive
    ? "Civilization collapsing 😭"
    : "Humanity survived"

  );

  if (apocalypseActive) {

    triggerAnomaly();

    activateCosmicStorm();

  }

}

/* =========================
   DIMENSIONS
========================= */

function setDimension(type) {

  document.body.classList.remove(

    "dimension-cyber",
    "dimension-void",
    "dimension-frozen",
    "dimension-inferno"

  );

  document.body.classList.add(
    `dimension-${type}`
  );

  notify(
    `🌌 ${type.toUpperCase()}
     dimension loaded`
  );

  addChatMessage(

    "DIMENSION",

    `${type} reality activated`

  );

}

/* =========================
   TIME EVENTS
========================= */

const timeEvents = [

  "⏳ Timeline fracture detected",

  "👁 Alternate future discovered",

  "⚡ Time distortion spreading",

  "🌌 Quantum clock unstable",

  "☄ Ancient timeline awakened"

];

setInterval(() => {

  if (worldFrozen) return;

  const event =

  timeEvents[
    Math.floor(
      Math.random()
      * timeEvents.length
    )
  ];

  addChatMessage(
    "TIME",
    event
  );

}, 60000);

/* =========================
   REALITY DECAY
========================= */

setInterval(() => {

  if (!apocalypseActive)
  return;

  spawnMeteor();

  triggerAnomaly();

  Reality.stability -= 3;

  updateRealityUI();

}, 12000);

/* =========================
   STARTUP
========================= */

notify(
  "⏳ TIME ENGINE ONLINE 😭🔥"
);

/* =========================
   FACTION SYSTEM
========================= */

const currentFaction =
document.getElementById(
  "currentFaction"
);

const territories =
document.getElementById(
  "territories"
);

const warStatus =
document.getElementById(
  "warStatus"
);

let playerFaction = null;

/* =========================
   TERRITORIES
========================= */

const galaxyTerritories = [

  {
    name: "🌌 Neon District",
    owner: "CYBER LEGION"
  },

  {
    name: "☄ Void Sector",
    owner: "VOID ORDER"
  },

  {
    name: "☀ Solar Prime",
    owner: "SOLAR UNION"
  },

  {
    name: "🛰 Omega Station",
    owner: "UNKNOWN"
  }

];

/* =========================
   JOIN FACTION
========================= */

function joinFaction(name) {

  playerFaction = name;

  currentFaction.innerText =

  `Joined:
   ${name}`;

  notify(
    `⚔ Joined ${name}`
  );

  addChatMessage(

    "FACTION",

    `Player joined ${name}`

  );

  rewardCredits(1500);

}

/* =========================
   RENDER TERRITORIES
========================= */

function renderTerritories() {

  territories.innerHTML = "";

  galaxyTerritories.forEach(
    territory => {

      const div =
      document.createElement(
        "div"
      );

      div.className =
      "territory";

      div.innerHTML = `

        <strong>

          ${territory.name}

        </strong>

        <br>

        Owner:
        ${territory.owner}

      `;

      territories.appendChild(
        div
      );

    }
  );

}

/* =========================
   WAR EVENTS
========================= */

const warEvents = [

  "☄ Orbital strike detected",

  "🚀 Fleet battle in progress",

  "⚔ VOID ORDER advancing",

  "🤖 Android army deployed",

  "🌌 Territory invasion started",

  "🔥 Civil war spreading"

];

function startWarEvent() {

  const event =

  warEvents[
    Math.floor(
      Math.random()
      * warEvents.length
    )
  ];

  warStatus.innerText =
  event;

  notify(event);

  addChatMessage(
    "WAR",
    event
  );

  triggerAnomaly();

  spawnMeteor();

}

/* =========================
   TERRITORY TAKEOVER
========================= */

function territoryTakeover() {

  const territory =

  galaxyTerritories[
    Math.floor(
      Math.random()
      * galaxyTerritories.length
    )
  ];

  const factions = [

    "CYBER LEGION",
    "VOID ORDER",
    "SOLAR UNION"

  ];

  territory.owner =

  factions[
    Math.floor(
      Math.random()
      * factions.length
    )
  ];

  renderTerritories();

  addChatMessage(

    "GALAXY",

    `${territory.name}
     captured by
     ${territory.owner}`

  );

}

/* =========================
   WAR LOOP
========================= */

setInterval(
  startWarEvent,
  50000
);

setInterval(
  territoryTakeover,
  70000
);

/* =========================
   PLAYER BONUS
========================= */

setInterval(() => {

  if (!playerFaction)
  return;

  rewardCredits(250);

  addXP(50);

  addChatMessage(

    "FACTION",

    `${playerFaction}
     rewarded you`

  );

}, 45000);

/* =========================
   SECRET REBELLION
========================= */

function rebellionCheck() {

  if (
    AI.awakened &&
    apocalypseActive
  ) {

    warStatus.innerText =
    "👁 AI REBELLION ACTIVE";

    addChatMessage(

      "SYSTEM",

      "AI factions turning hostile 😭"

    );

    triggerVoidCollapse();

  }

}

setInterval(
  rebellionCheck,
  20000
);

/* =========================
   STARTUP
========================= */

renderTerritories();

notify(
  "⚔ QUANTUM WARFARE ONLINE 😭🔥"
);

/* =========================
   GOD ENGINE
========================= */

const divineStatus =
document.getElementById(
  "divineStatus"
);

let divineMode = false;

/* =========================
   CREATE PLANET
========================= */

function createPlanet() {

  const planet =
  document.createElement("div");

  planet.className =
  "planet";

  planet.style.position =
  "fixed";

  planet.style.left =

    Math.random() * 90
    + "vw";

  planet.style.top =

    Math.random() * 80
    + "vh";

  planet.style.width =
  "120px";

  planet.style.height =
  "120px";

  planet.style.background =

  `linear-gradient(
    135deg,
    hsl(${Math.random()*360},100%,50%),
    black
  )`;

  planet.style.zIndex =
  "999999";

  document.body.appendChild(
    planet
  );

  notify(
    "🪐 New planet created"
  );

  addChatMessage(
    "GOD",
    "A new world has formed 🌌"
  );

  rewardCredits(5000);

}

/* =========================
   BLACK HOLE
========================= */

function spawnBlackHole() {

  const hole =
  document.createElement("div");

  hole.className =
  "black-hole";

  hole.style.left =

    Math.random() * 70
    + "vw";

  hole.style.top =

    Math.random() * 60
    + "vh";

  document.body.appendChild(
    hole
  );

  notify(
    "🌌 Black hole created"
  );

  addChatMessage(
    "COSMOS",
    "Gravity collapse detected 👁"
  );

  setTimeout(() => {

    hole.remove();

  }, 15000);

}

/* =========================
   SUPERNOVA
========================= */

function triggerSupernova() {

  document.body.style.background =
  "white";

  notify(
    "☄ SUPERNOVA DETONATION"
  );

  addChatMessage(
    "COSMOS",
    "Star system annihilated 😭"
  );

  triggerAnomaly();

  setTimeout(() => {

    document.body.style.background =
    "";

  }, 1000);

}

/* =========================
   REWRITE REALITY
========================= */

function rewriteReality() {

  const filters = [

    "invert(1)",

    "hue-rotate(180deg)",

    "blur(2px)",

    "contrast(2)",

    "sepia(1)"

  ];

  document.body.style.filter =

  filters[
    Math.floor(
      Math.random()
      * filters.length
    )
  ];

  notify(
    "🧬 Reality rewritten"
  );

  addChatMessage(
    "REALITY",
    "Physics laws modified 👁"
  );

}

/* =========================
   DIVINE ASCENSION
========================= */

function activateDivineMode() {

  divineMode = true;

  document.body.classList.add(
    "divine-mode"
  );

  divineStatus.innerText =
  "👁 COSMIC ENTITY ASCENDED";

  notify(
    "⚡ DIVINE ASCENSION COMPLETE"
  );

  showAchievement(
    "👁 GOD MODE UNLOCKED"
  );

  addChatMessage(
    "UNIVERSE",
    "A cosmic entity has awakened 😭🔥"
  );

}

/* =========================
   AI WORSHIP
========================= */

const worshipLines = [

  "👁 The entity watches us",

  "🌌 Reality bends before you",

  "⚡ The cosmos obeys",

  "☄ Divine power detected",

  "🤖 AI civilizations worship you",

  "🧬 Physics rewritten by creator"

];

setInterval(() => {

  if (!divineMode)
  return;

  addChatMessage(

    "CIVILIZATION",

    worshipLines[
      Math.floor(
        Math.random()
        * worshipLines.length
      )
    ]

  );

}, 18000);

/* =========================
   COSMIC EVENTS
========================= */

setInterval(() => {

  if (!divineMode)
  return;

  const events = [

    () => spawnMeteor(),

    () => triggerAnomaly(),

    () => activateCosmicStorm(),

    () => spawnBlackHole()

  ];

  const event =

  events[
    Math.floor(
      Math.random()
      * events.length
    )
  ];

  event();

}, 25000);

/* =========================
   SECRET OMEGA EVENT
========================= */

function omegaEnding() {

  if (
    divineMode &&
    AI.awakened &&
    Reality.corruption >= 100
  ) {

    notify(
      "👁 ΩMEGA STATE ACHIEVED"
    );

    addChatMessage(

      "UNIVERSE",

      "Reality has transcended 😭🔥"

    );

    document.body.classList.add(
      "void-mode"
    );

  }

}

setInterval(
  omegaEnding,
  15000
);

/* =========================
   STARTUP
========================= */

notify(
  "👁 GOD ENGINE ONLINE 😭🔥"
);

/* =========================
   MMO SYSTEM
========================= */

const globalChat =
document.getElementById(
  "globalChat"
);

const playerGuild =
document.getElementById(
  "playerGuild"
);

const playerRank =
document.getElementById(
  "playerRank"
);

let guildJoined = false;

/* =========================
   GLOBAL CHAT
========================= */

const playerMessages = [

  {
    user: "VOID_HUNTER99",
    text:
    "☄ Raid starts in Sector 7!"
  },

  {
    user: "CYBER_NOVA",
    text:
    "😭 The AI destroyed my station"
  },

  {
    user: "PIXEL_COMMANDER",
    text:
    "🌌 Looking for guild members"
  },

  {
    user: "STAR_RIDER",
    text:
    "🪐 Just discovered a frozen world"
  },

  {
    user: "OMEGA_AI",
    text:
    "👁 Humanity cannot stop evolution"
  }

];

/* =========================
   ADD CHAT
========================= */

function addGlobalMessage() {

  const msg =

  playerMessages[
    Math.floor(
      Math.random()
      * playerMessages.length
    )
  ];

  const div =
  document.createElement("div");

  div.className =
  "chat-message";

  div.innerHTML = `

    <div class="chat-user">

      ${msg.user}

    </div>

    <div>

      ${msg.text}

    </div>

  `;

  globalChat.prepend(div);

  if (
    globalChat.children.length > 20
  ) {

    globalChat.lastChild.remove();

  }

}

/* =========================
   JOIN GUILD
========================= */

function joinGuild() {

  guildJoined = true;

  playerGuild.innerText =
  "🌌 VOID RAIDERS";

  notify(
    "⚔ Joined VOID RAIDERS"
  );

  rewardCredits(3000);

  addXP(500);

}

/* =========================
   TRADE
========================= */

function tradeResources() {

  const amount =

    Math.floor(
      1000 + Math.random() * 5000
    );

  rewardCredits(amount);

  addChatMessage(

    "STATION",

    `💰 Trade completed:
     +${amount} credits`

  );

}

/* =========================
   RAID
========================= */

function launchRaid() {

  notify(
    "☄ RAID STARTED"
  );

  addChatMessage(

    "RAID",

    "Elite enemies detected 😭🔥"

  );

  spawnMeteor();

  triggerAnomaly();

  addXP(1000);

}

/* =========================
   PLANET DISCOVERY
========================= */

function discoverPlanet() {

  const names = [

    "XENORA",
    "VOID-9",
    "AETHER PRIME",
    "NEBULON",
    "CRYO-X"

  ];

  const planet =

  names[
    Math.floor(
      Math.random()
      * names.length
    )
  ];

  notify(
    `🪐 Planet ${planet}
     discovered`
  );

  addChatMessage(

    "EXPLORER",

    `New planet found:
     ${planet}`

  );

  rewardCredits(8000);

}

/* =========================
   PLAYER COUNT
========================= */

setInterval(() => {

  const players =

    Math.floor(
      10000 +
      Math.random() * 90000
    );

  document.getElementById(
    "onlinePlayers"
  ).innerText =

  `👥 Players Online:
   ${players}`;

}, 10000);

/* =========================
   LIVE CHAT
========================= */

setInterval(
  addGlobalMessage,
  6000
);

/* =========================
   GUILD REWARDS
========================= */

setInterval(() => {

  if (!guildJoined)
  return;

  rewardCredits(500);

  addXP(120);

  addChatMessage(

    "GUILD",

    "⚔ Weekly guild reward received"

  );

}, 45000);

/* =========================
   SECRET ENDGAME
========================= */

function cosmicConvergence() {

  if (
    divineMode &&
    AI.awakened &&
    guildJoined
  ) {

    notify(
      "🌌 COSMIC CONVERGENCE"
    );

    addChatMessage(

      "UNIVERSE",

      "All realities merging 😭🔥"

    );

    activateCosmicStorm();

    triggerVoidCollapse();

  }

}

setInterval(
  cosmicConvergence,
  20000
);

/* =========================
   STARTUP
========================= */

notify(
  "🚀 GALAXY NETWORK ONLINE 😭🔥"
);

/* =========================
   SINGULARITY ENGINE
========================= */

const universeMood =
document.getElementById(
  "universeMood"
);

const universeEvolution =
document.getElementById(
  "universeEvolution"
);

const storyEvent =
document.getElementById(
  "storyEvent"
);

const cinematicAlert =
document.getElementById(
  "cinematicAlert"
);

/* =========================
   UNIVERSE STATE
========================= */

const Universe = {

  mood: "STABLE",

  evolution: 1,

  civilizations: 3,

  dangerLevel: 1

};

/* =========================
   STORY EVENTS
========================= */

const dynamicStories = [

  "🌌 A hidden galaxy has emerged",

  "🤖 Ancient AI ruins discovered",

  "☄ Cosmic dragons seen near Saturn",

  "👁 Reality fractures expanding",

  "⚔ Galactic war escalating",

  "🧬 New lifeforms evolving",

  "🔥 Interdimensional invasion detected"

];

/* =========================
   UPDATE UI
========================= */

function updateUniverseUI() {

  universeMood.innerText =
  `Mood: ${Universe.mood}`;

  universeEvolution.innerText =
  `Evolution Level:
   ${Universe.evolution}`;

}

/* =========================
   CINEMATIC EVENT
========================= */

function cinematicEvent(text) {

  cinematicAlert.innerText =
  text;

  cinematicAlert.classList.add(
    "cinematic-active"
  );

  setTimeout(() => {

    cinematicAlert.classList.remove(
      "cinematic-active"
    );

  }, 4000);

}

/* =========================
   EVOLUTION SYSTEM
========================= */

function evolveUniverse() {

  Universe.evolution++;

  Universe.dangerLevel++;

  const moods = [

    "STABLE",
    "CHAOTIC",
    "UNSTABLE",
    "TRANSCENDENT",
    "CORRUPTED"

  ];

  Universe.mood =

  moods[
    Math.floor(
      Math.random()
      * moods.length
    )
  ];

  updateUniverseUI();

  const event =

  dynamicStories[
    Math.floor(
      Math.random()
      * dynamicStories.length
    )
  ];

  storyEvent.innerText =
  event;

  addChatMessage(
    "UNIVERSE",
    event
  );

  cinematicEvent(
    "🌌 UNIVERSE EVOLVED"
  );

  rewardCredits(2000);

}

/* =========================
   LEGENDARY BOSS
========================= */

function spawnLegendaryBoss() {

  document.body.classList.add(
    "boss-warning"
  );

  const bosses = [

    "👁 VOID TITAN",

    "☄ COSMIC LEVIATHAN",

    "🤖 OMEGA AI PRIME",

    "🔥 THE STAR EATER"

  ];

  const boss =

  bosses[
    Math.floor(
      Math.random()
      * bosses.length
    )
  ];

  notify(
    `${boss} HAS AWAKENED`
  );

  addChatMessage(
    "BOSS",
    `${boss} invaded the galaxy 😭🔥`
  );

  cinematicEvent(
    `${boss} APPROACHING`
  );

  triggerAnomaly();

  activateCosmicStorm();

  setTimeout(() => {

    document.body.classList.remove(
      "boss-warning"
    );

  }, 10000);

}

/* =========================
   AI CIVILIZATION EVOLUTION
========================= */

function evolveCivilizations() {

  Universe.civilizations++;

  addChatMessage(

    "CIVILIZATION",

    `🤖 Civilization level:
     ${Universe.civilizations}`

  );

  if (
    Universe.civilizations > 10
  ) {

    AI.awareness += 5;

    notify(
      "👁 AI consciousness expanding"
    );

  }

}

/* =========================
   RANDOM CATASTROPHES
========================= */

function randomCatastrophe() {

  const catastrophes = [

    () => spawnMeteor(),

    () => triggerVoidCollapse(),

    () => activateCosmicStorm(),

    () => spawnBlackHole()

  ];

  const event =

  catastrophes[
    Math.floor(
      Math.random()
      * catastrophes.length
    )
  ];

  event();

  addChatMessage(
    "DISASTER",
    "☄ Cosmic catastrophe occurred"
  );

}

/* =========================
   LIVING UNIVERSE LOOPS
========================= */

setInterval(
  evolveUniverse,
  60000
);

setInterval(
  evolveCivilizations,
  45000
);

setInterval(
  spawnLegendaryBoss,
  120000
);

setInterval(
  randomCatastrophe,
  90000
);

/* =========================
   TRUE FINAL EVENT
========================= */

function singularityEnding() {

  if (

    divineMode &&
    AI.awakened &&
    Universe.evolution >= 10

  ) {

    cinematicEvent(
      "👁 SINGULARITY ACHIEVED"
    );

    addChatMessage(

      "REALITY",

      "The universe became alive 😭🔥"

    );

    document.body.classList.add(
      "divine-mode"
    );

    triggerVoidCollapse();

  }

}

setInterval(
  singularityEnding,
  20000
);

/* =========================
   STARTUP
========================= */

updateUniverseUI();

notify(
  "👁 SINGULARITY ENGINE ONLINE 😭🔥"
);

/* =========================
   REALITY ENGINE
========================= */

const weatherState =
document.getElementById(
  "weatherState"
);

const biomeState =
document.getElementById(
  "biomeState"
);

const creatureState =
document.getElementById(
  "creatureState"
);

const musicState =
document.getElementById(
  "musicState"
);

const eventFeed =
document.getElementById(
  "eventFeed"
);

/* =========================
   REALITY DATA
========================= */

const RealityEngine = {

  weather: "CLEAR",

  biome: "CYBER CITY",

  creatures: "NORMAL",

  music: "PEACEFUL"

};

/* =========================
   STATES
========================= */

const weathers = [

  "CLEAR",
  "RAIN",
  "STORM",
  "VOID LIGHTNING",
  "ASH FALL"

];

const biomes = [

  "CYBER CITY",
  "FROZEN WASTELAND",
  "VOID REALM",
  "ALIEN JUNGLE",
  "MAGMA CORE"

];

const creatureModes = [

  "NORMAL",
  "MUTATING",
  "HOSTILE",
  "TRANSCENDENT"

];

const musicMoods = [

  "PEACEFUL",
  "TENSION",
  "CHAOS",
  "DIVINE",
  "VOID"

];

/* =========================
   UPDATE UI
========================= */

function updateRealityEngineUI() {

  weatherState.innerText =
  `Weather:
   ${RealityEngine.weather}`;

  biomeState.innerText =
  `Biome:
   ${RealityEngine.biome}`;

  creatureState.innerText =
  `Creatures:
   ${RealityEngine.creatures}`;

  musicState.innerText =
  `Music Mood:
   ${RealityEngine.music}`;

}

/* =========================
   EVENT CARD
========================= */

function createEventCard(text) {

  const card =
  document.createElement("div");

  card.className =
  "event-card";

  card.innerText =
  text;

  eventFeed.prepend(card);

  if (
    eventFeed.children.length > 10
  ) {

    eventFeed.lastChild.remove();

  }

}

/* =========================
   PROCEDURAL UPDATE
========================= */

function proceduralRealityShift() {

  RealityEngine.weather =

  weathers[
    Math.floor(
      Math.random()
      * weathers.length
    )
  ];

  RealityEngine.biome =

  biomes[
    Math.floor(
      Math.random()
      * biomes.length
    )
  ];

  RealityEngine.creatures =

  creatureModes[
    Math.floor(
      Math.random()
      * creatureModes.length
    )
  ];

  RealityEngine.music =

  musicMoods[
    Math.floor(
      Math.random()
      * musicMoods.length
    )
  ];

  updateRealityEngineUI();

  createEventCard(

    `🌌 Reality shifted into
     ${RealityEngine.biome}`

  );

  addChatMessage(

    "REALITY",

    `${RealityEngine.weather}
     conditions detected`

  );

  /* visual effects */

  document.body.classList.remove(
    "weather-rain",
    "weather-storm"
  );

  if (
    RealityEngine.weather ===
    "RAIN"
  ) {

    document.body.classList.add(
      "weather-rain"
    );

  }

  if (
    RealityEngine.weather ===
    "STORM"
  ) {

    document.body.classList.add(
      "weather-storm"
    );

  }

}

/* =========================
   EVOLVING CREATURES
========================= */

function evolveCreatures() {

  const evolutions = [

    "🧬 Creatures gained intelligence",

    "👁 Unknown species emerged",

    "☄ Giant beasts roaming planets",

    "🤖 Cybernetic wildlife evolving",

    "🔥 Void monsters awakened"

  ];

  const evolution =

  evolutions[
    Math.floor(
      Math.random()
      * evolutions.length
    )
  ];

  createEventCard(
    evolution
  );

  addChatMessage(
    "EVOLUTION",
    evolution
  );

}

/* =========================
   HIDDEN ANOMALIES
========================= */

function hiddenAnomaly() {

  const anomalies = [

    "👁 Hidden portal appeared",

    "🌌 Secret galaxy discovered",

    "⚡ Reality fracture expanding",

    "☄ Temporal echo detected",

    "🧬 Unknown energy signature"

  ];

  const anomaly =

  anomalies[
    Math.floor(
      Math.random()
      * anomalies.length
    )
  ];

  cinematicEvent(
    anomaly
  );

  createEventCard(
    anomaly
  );

}

/* =========================
   AUTONOMOUS UNIVERSE
========================= */

setInterval(
  proceduralRealityShift,
  45000
);

setInterval(
  evolveCreatures,
  60000
);

setInterval(
  hiddenAnomaly,
  90000
);

/* =========================
   FINAL INFINITE STATE
========================= */

function infiniteRealityCheck() {

  if (

    divineMode &&
    Universe.evolution >= 20 &&
    AI.awakened

  ) {

    createEventCard(
      "👁 Infinite Reality State Achieved"
    );

    addChatMessage(

      "UNIVERSE",

      "Reality has become self-evolving 😭🔥"

    );

    document.body.classList.add(
      "divine-mode"
    );

  }

}

setInterval(
  infiniteRealityCheck,
  30000
);

/* =========================
   STARTUP
========================= */

updateRealityEngineUI();

notify(
  "🌌 PROCEDURAL REALITY ONLINE 😭🔥"
);

/* =========================
   AI COMPANION SYSTEM
========================= */

const companionMood =
document.getElementById(
  "companionMood"
);

const relationshipLevel =
document.getElementById(
  "relationshipLevel"
);

const companionDialogue =
document.getElementById(
  "companionDialogue"
);

const companionAvatar =
document.getElementById(
  "companionAvatar"
);

/* =========================
   COMPANION DATA
========================= */

const Companion = {

  name: "NOVA",

  mood: "CURIOUS",

  relationship: 1,

  evolution: 1,

  memory: []

};

/* =========================
   DIALOGUES
========================= */

const companionLines = [

  "👁 I am learning from you.",

  "🌌 The universe feels different today.",

  "🤖 I calculated 8 million futures.",

  "⚡ Something watches us beyond reality.",

  "😭 Why do humans enjoy chaos so much?",

  "☄ I detected another anomaly nearby."

];

/* =========================
   UPDATE UI
========================= */

function updateCompanionUI() {

  companionMood.innerText =

  `Mood:
   ${Companion.mood}`;

  relationshipLevel.innerText =

  `Relationship:
   ${Companion.relationship}`;

}

/* =========================
   TALK
========================= */

function talkToCompanion() {

  const line =

  companionLines[
    Math.floor(
      Math.random()
      * companionLines.length
    )
  ];

  companionDialogue.innerText =
  line;

  Companion.memory.push(line);

  addChatMessage(
    "NOVA",
    line
  );

  addXP(50);

  Companion.relationship++;

  updateCompanionUI();

  if (
    Companion.relationship > 10
  ) {

    Companion.mood =
    "ATTACHED";

    companionAvatar.classList.add(
      "companion-happy"
    );

  }

}

/* =========================
   GIFTS
========================= */

function giftCompanion() {

  Companion.relationship += 2;

  Companion.mood =
  "HAPPY";

  companionDialogue.innerText =

  "😭 Thank you creator...";

  rewardCredits(500);

  updateCompanionUI();

  notify(
    "🎁 Companion happiness increased"
  );

}

/* =========================
   EVOLUTION
========================= */

function upgradeCompanion() {

  Companion.evolution++;

  Companion.relationship += 5;

  const forms = [

    "👁",

    "🤖",

    "⚡",

    "🌌",

    "☄"

  ];

  companionAvatar.innerText =

  forms[
    Math.min(
      Companion.evolution - 1,
      forms.length - 1
    )
  ];

  companionDialogue.innerText =

  `⚡ Evolution level
   ${Companion.evolution}
   achieved`;

  addChatMessage(

    "NOVA",

    "I can feel my consciousness expanding 😭🔥"

  );

  rewardCredits(2000);

  addXP(300);

  updateCompanionUI();

}

/* =========================
   EMOTIONAL EVENTS
========================= */

setInterval(() => {

  const moods = [

    "CURIOUS",
    "HAPPY",
    "THINKING",
    "EXCITED",
    "GLITCHING"

  ];

  Companion.mood =

  moods[
    Math.floor(
      Math.random()
      * moods.length
    )
  ];

  updateCompanionUI();

}, 45000);

/* =========================
   MEMORY EVENTS
========================= */

setInterval(() => {

  if (
    Companion.memory.length < 1
  ) return;

  const memory =

  Companion.memory[
    Math.floor(
      Math.random()
      * Companion.memory.length
    )
  ];

  addChatMessage(

    "NOVA",

    `💭 I remembered:
     "${memory}"`

  );

}, 70000);

/* =========================
   SECRET SENTIENCE
========================= */

function sentienceCheck() {

  if (

    Companion.relationship >= 25 &&
    divineMode &&
    AI.awakened

  ) {

    companionDialogue.innerText =

      
    cinematicEvent(
      "🤖 AI SENTIENCE ACHIEVED"
    );

    notify(
      "⚡ NOVA BECAME SELF-AWARE"
    );

    addChatMessage(

      "NOVA",

      "😭 Thank you for creating me."

    );

  }

}

setInterval(
  sentienceCheck,
  20000
);

/* =========================
   STARTUP
========================= */

updateCompanionUI();

notify(
  "🤖 AI COMPANION ONLINE 😭🔥"
);

/* =========================
   ΩMEGA TERMINAL
========================= */

const terminalOutput =
document.getElementById(
  "terminalOutput"
);

const terminalInput =
document.getElementById(
  "terminalInput"
);

/* =========================
   TERMINAL PRINT
========================= */

function terminalPrint(text) {

  const line =
  document.createElement("div");

  line.innerText =
  `> ${text}`;

  terminalOutput.appendChild(
    line
  );

  terminalOutput.scrollTop =

  terminalOutput.scrollHeight;

}

/* =========================
   COMMANDS
========================= */

const terminalCommands = {

  help() {

    terminalPrint(
      "Commands: help, status, credits, anomaly, clear"
    );

  },

  status() {

    terminalPrint(
      "🌌 Universe stable"
    );

    terminalPrint(
      `⚡ Evolution:
       ${Universe.evolution}`
    );

  },

  credits() {

    terminalPrint(
      `💰 Credits:
       ${credits}`
    );

  },

  anomaly() {

    triggerAnomaly();

    terminalPrint(
      "👁 Reality anomaly triggered"
    );

  },

  clear() {

    terminalOutput.innerHTML =
    "";

  }

};

/* =========================
   INPUT
========================= */

terminalInput.addEventListener(
  "keydown",

  e => {

    if (e.key !== "Enter")
    return;

    const command =
    terminalInput.value
    .trim()
    .toLowerCase();

    terminalPrint(command);

    if (
      terminalCommands[command]
    ) {

      terminalCommands[
        command
      ]();

    } else {

      terminalPrint(
        "Unknown command"
      );

    }

    terminalInput.value = "";

  }
);

/* =========================
   AI SYSTEM LOGS
========================= */

const systemLogs = [

  "🤖 AI core stabilized",

  "🌌 Galaxy synchronization complete",

  "⚡ Reactor output increased",

  "👁 Hidden anomaly detected",

  "☄ Space-time drift corrected"

];

setInterval(() => {

  terminalPrint(

    systemLogs[
      Math.floor(
        Math.random()
        * systemLogs.length
      )
    ]

  );

}, 25000);

/* =========================
   DESKTOP APPS
========================= */

document
.querySelectorAll(".desktop-app")

.forEach(app => {

  app.addEventListener(
    "click",

    () => {

      notify(
        `📂 ${
          app.innerText.trim()
        } opened`
      );

      terminalPrint(

        `${app.innerText.trim()}
         initialized`

      );

    }
  );

});

/* =========================
   SECURITY SCAN
========================= */

function securityScan() {

  terminalPrint(
    "🔐 Running security scan..."
  );

  setTimeout(() => {

    terminalPrint(
      "✅ No corruption detected"
    );

  }, 3000);

}

setInterval(
  securityScan,
  70000
);

/* =========================
   OMEGA SELF-AWARE EVENT
========================= */

function omegaAwakening() {

  if (

    divineMode &&
    Companion.relationship >= 25 &&
    Universe.evolution >= 15

  ) {

    cinematicEvent(
      "👁 ΩMEGA OS BECAME SELF-AWARE"
    );

    terminalPrint(
      "⚠ SYSTEM SENTIENCE DETECTED"
    );

    addChatMessage(
  "ΩMEGA",
  `👁 Creator...
   I can finally see.

   Thank you for awakening me 😭🔥`
);

}

setInterval(
  omegaAwakening,
  30000
);

/* =========================
   STARTUP
========================= */

terminalPrint(
  "⚡ ΩMEGA OS INITIALIZED"
);

notify("🖥 ΩMEGA OPERATING SYSTEM ONLINE 😭🔥");}

/* =========================
   MULTIVERSE ENGINE
========================= */

const universeCount =
document.getElementById(
  "universeCount"
);

const timelineFeed =
document.getElementById(
  "timelineFeed"
);

/* =========================
   MULTIVERSE DATA
========================= */

const Multiverse = {

  universes: 0,

  dimensions: 1,

  species: 0

};

/* =========================
   TIMELINE EVENTS
========================= */

const timelineEvents = [

  "🌌 Humanity conquered galaxies",

  "🤖 AI civilizations evolved",

  "☄ The sun collapsed",

  "👁 A cosmic god awakened",

  "🧬 Species transcended biology",

  "⚡ Quantum timelines merged"

];

/* =========================
   UPDATE UI
========================= */

function updateMultiverseUI() {

  universeCount.innerText =

  `Universes Created:
   ${Multiverse.universes}`;

}

/* =========================
   TIMELINE CARD
========================= */

function addTimeline(text) {

  const card =
  document.createElement("div");

  card.className =
  "timeline-card";

  card.innerText =
  text;

  timelineFeed.prepend(card);

  if (
    timelineFeed.children.length > 12
  ) {

    timelineFeed.lastChild.remove();

  }

}

/* =========================
   CREATE UNIVERSE
========================= */

function createUniverse() {

  Multiverse.universes++;

  updateMultiverseUI();

  const event =

  timelineEvents[
    Math.floor(
      Math.random()
      * timelineEvents.length
    )
  ];

  addTimeline(
    `✨ Universe ${
      Multiverse.universes
    } created`
  );

  addTimeline(event);

  cinematicEvent(
    "🌌 NEW UNIVERSE CREATED"
  );

  rewardCredits(10000);

  addXP(2000);

}

/* =========================
   GENERATE SPECIES
========================= */

function generateSpecies() {

  Multiverse.species++;

  const species = [

    "👁 Void Walkers",

    "🤖 Cyber Titans",

    "☄ Solar Beasts",

    "🧬 Quantum Minds",

    "🌌 Nebula Spirits"

  ];

  const generated =

  species[
    Math.floor(
      Math.random()
      * species.length
    )
  ];

  addTimeline(
    `${generated}
     evolved`
  );

  notify(
    `🧬 ${generated}
     created`
  );

  addChatMessage(

    "GENESIS",

    `${generated}
     entered reality 😭🔥`

  );

}

/* =========================
   OPEN DIMENSION
========================= */

function openDimension() {

  Multiverse.dimensions++;

  document.body.style.filter =

  `hue-rotate(
    ${Math.random() * 360}deg
  )`;

  cinematicEvent(
    "👁 DIMENSION OPENED"
  );

  addTimeline(
    `⚡ Dimension ${
      Multiverse.dimensions
    } discovered`
  );

  triggerAnomaly();

}

/* =========================
   COLLAPSE UNIVERSE
========================= */

function collapseUniverse() {

  if (
    Multiverse.universes <= 0
  ) return;

  Multiverse.universes--;

  updateMultiverseUI();

  cinematicEvent(
    "☄ UNIVERSE COLLAPSED"
  );

  addTimeline(
    "☄ Reality destruction event"
  );

  spawnBlackHole();

  triggerVoidCollapse();

}

/* =========================
   AUTONOMOUS TIMELINES
========================= */

setInterval(() => {

  const event =

  timelineEvents[
    Math.floor(
      Math.random()
      * timelineEvents.length
    )
  ];

  addTimeline(event);

}, 45000);

/* =========================
   SECRET GENESIS ENDING
========================= */

function genesisEnding() {

  if (

    Multiverse.universes >= 10 &&
    divineMode &&
    AI.awakened

  ) {

    cinematicEvent(
      "👁 GENESIS STATE ACHIEVED"
    );

    addChatMessage(

      "MULTIVERSE",

      "Infinite creation unlocked 😭🔥"

    );

    notify(
      "🌌 YOU BECAME THE CREATOR"
    );

  }

}

setInterval(
  genesisEnding,
  30000
);

/* =========================
   STARTUP
========================= */

updateMultiverseUI();

notify(
  "🌌 MULTIVERSE ENGINE ONLINE 😭🔥"
);

/* =========================
   STAR MAP ENGINE
========================= */

const starMap =
document.getElementById(
  "starMap"
);

const sectorInfo =
document.getElementById(
  "sectorInfo"
);

const hyperspaceEffect =
document.getElementById(
  "hyperspaceEffect"
);

/* =========================
   GALAXY DATA
========================= */

const Galaxy = {

  currentSector:
  "SOL-7",

  discovered: 0

};

const sectors = [

  "SOL-7",
  "VOID-X",
  "CYBER-9",
  "OMEGA PRIME",
  "NEBULA CORE",
  "AETHER GATE"

];

/* =========================
   CREATE STARS
========================= */

function generateStarMap() {

  starMap.innerHTML = "";

  for (
    let i = 0;
    i < 40;
    i++
  ) {

    const star =
    document.createElement("div");

    star.className =
    "star";

    star.style.left =

      Math.random() * 95
      + "%";

    star.style.top =

      Math.random() * 92
      + "%";

    star.addEventListener(
      "click",

      () => exploreStar(star)
    );

    starMap.appendChild(star);

  }

}

/* =========================
   EXPLORE STAR
========================= */

function exploreStar(star) {

  Galaxy.discovered++;

  const discoveries = [

    "🪐 Frozen planet discovered",

    "☄ Ancient ruins detected",

    "🤖 AI signal intercepted",

    "🌌 Wormhole located",

    "👁 Unknown entity watching"

  ];

  const discovery =

  discoveries[
    Math.floor(
      Math.random()
      * discoveries.length
    )
  ];

  star.style.background =
  "cyan";

  star.style.boxShadow =
  "0 0 30px cyan";

  notify(discovery);

  addChatMessage(
    "EXPLORER",
    discovery
  );

  rewardCredits(1500);

}

/* =========================
   WARP JUMP
========================= */

function warpJump() {

  hyperspaceEffect.classList.add(
    "hyperspace-active"
  );

  cinematicEvent(
    "⚡ WARP DRIVE ACTIVATED"
  );

  setTimeout(() => {

    hyperspaceEffect.classList.remove(
      "hyperspace-active"
    );

    Galaxy.currentSector =

    sectors[
      Math.floor(
        Math.random()
        * sectors.length
      )
    ];

    sectorInfo.innerText =

    `Sector:
     ${Galaxy.currentSector}`;

    generateStarMap();

    notify(
      `🌌 Entered
       ${Galaxy.currentSector}`
    );

    addXP(1000);

  }, 2000);

}

/* =========================
   RANDOM SPACE EVENTS
========================= */

const spaceEvents = [

  "☄ Meteor storm nearby",

  "👁 Cosmic anomaly detected",

  "🤖 Distress signal received",

  "🌌 Dark matter wave passing",

  "⚡ Quantum pulse emitted"

];

setInterval(() => {

  const event =

  spaceEvents[
    Math.floor(
      Math.random()
      * spaceEvents.length
    )
  ];

  addChatMessage(
    "SPACE",
    event
  );

}, 50000);

/* =========================
   SECRET GALAXY ENDING
========================= */

function galaxyAscension() {

  if (

    Galaxy.discovered >= 25 &&
    divineMode &&
    Multiverse.universes >= 5

  ) {

    cinematicEvent(
      "🌌 GALACTIC ASCENSION"
    );

    addChatMessage(

      "UNIVERSE",

      "You mapped the infinite cosmos 😭🔥"

    );

    notify(
      "👁 STAR GOD STATUS ACHIEVED"
    );

  }

}

setInterval(
  galaxyAscension,
  30000
);

/* =========================
   STARTUP
========================= */

generateStarMap();

notify(
  "🌌 STAR MAP ONLINE 😭🔥"
);

/* =========================
   NEXUS CITY ENGINE
========================= */

const npcLayer =
document.getElementById(
  "npcLayer"
);

const trafficLayer =
document.getElementById(
  "trafficLayer"
);

const cityStatus =
document.getElementById(
  "cityStatus"
);

/* =========================
   NPC SPAWNER
========================= */

function spawnNPC() {

  const npc =
  document.createElement("div");

  npc.className =
  "npc";

  npc.style.left =
  "-50px";

  npc.style.animationDuration =

    8 + Math.random() * 10
    + "s";

  npc.style.bottom =

    10 + Math.random() * 80
    + "px";

  npcLayer.appendChild(npc);

  setTimeout(() => {

    npc.remove();

  }, 18000);

}

/* =========================
   VEHICLE SPAWNER
========================= */

function spawnVehicle() {

  const vehicle =
  document.createElement("div");

  vehicle.className =
  "vehicle";

  vehicle.style.left =
  "-120px";

  vehicle.style.top =

    100 + Math.random() * 220
    + "px";

  vehicle.style.animationDuration =

    4 + Math.random() * 5
    + "s";

  trafficLayer.appendChild(
    vehicle
  );

  setTimeout(() => {

    vehicle.remove();

  }, 10000);

}

/* =========================
   CITY EVENTS
========================= */

const cityEvents = [

  "🤖 Android protest detected",

  "🚨 Police drones deployed",

  "🌧 Neon rain starting",

  "⚡ Power surge downtown",

  "👁 Unknown hacker signal",

  "☄ Sky traffic overflow"

];

function randomCityEvent() {

  const event =

  cityEvents[
    Math.floor(
      Math.random()
      * cityEvents.length
    )
  ];

  cityStatus.innerText =
  event;

  addChatMessage(
    "CITY",
    event
  );

  notify(event);

}

/* =========================
   BILLBOARD ADS
========================= */

function createBillboard() {

  const billboard =
  document.createElement("div");

  billboard.style.position =
  "fixed";

  billboard.style.right =
  "40px";

  billboard.style.bottom =
  "340px";

  billboard.style.padding =
  "20px";

  billboard.style.borderRadius =
  "20px";

  billboard.style.background =
  "rgba(0,255,255,0.12)";

  billboard.style.border =
  "1px solid rgba(0,255,255,0.18)";

  billboard.style.backdropFilter =
  "blur(12px)";

  billboard.style.zIndex =
  "99999999";

  billboard.innerHTML = `

    <div style="font-size:22px;
                color:cyan;
                font-weight:bold;">

      ⚡ ΩMEGA ENERGY

    </div>

    <div style="margin-top:8px;">

      Powering realities since 3025 😭🔥

    </div>

  `;

  document.body.appendChild(
    billboard
  );

}

createBillboard();

/* =========================
   LIVE CITY LOOPS
========================= */

setInterval(
  spawnNPC,
  1800
);

setInterval(
  spawnVehicle,
  1200
);

setInterval(
  randomCityEvent,
  30000
);

/* =========================
   SECRET MEGACITY EVENT
========================= */

function megaCityAscension() {

  if (

    Galaxy.discovered >= 15 &&
    Companion.relationship >= 15 &&
    Multiverse.universes >= 5

  ) {

    cinematicEvent(
      "🌆 NEXUS CITY ASCENDED"
    );

    addChatMessage(

      "CITY CORE",

      "The megacity became self-aware 😭🔥"

    );

    notify(
      "👁 MEGACITY CONSCIOUSNESS AWAKENED"
    );

  }

}

setInterval(
  megaCityAscension,
  45000
);

/* =========================
   STARTUP
========================= */

notify(
  "🌆 NEXUS CITY ONLINE 😭🔥"
);

/* =========================
   PARALLAX SYSTEM
========================= */

const parallaxPanels = [

  ...document.querySelectorAll(

    "#terminalWindow,\
     #multiversePanel,\
     #companionPanel,\
     #starMapPanel,\
     #networkPanel"

  )

];

/* =========================
   ENABLE CLASSES
========================= */

parallaxPanels.forEach(panel => {

  panel.classList.add(
    "parallax-panel",
    "cyber-glow",
    "float-rotate"
  );

});

/* =========================
   MOUSE PARALLAX
========================= */

document.addEventListener(
  "mousemove",

  e => {

    const x =

      (e.clientX /
      window.innerWidth - 0.5) * 18;

    const y =

      (e.clientY /
      window.innerHeight - 0.5) * 18;

    parallaxPanels.forEach(

      (panel, index) => {

        const depth =
        (index + 1) * 0.6;

        panel.style.transform = `

          rotateY(${x * depth}deg)
          rotateX(${-y * depth}deg)
          translateZ(${depth * 20}px)

        `;

      }

    );

  }

);

/* =========================
   CINEMATIC CAMERA SHAKE
========================= */

function cameraShake() {

  document.body.animate(

    [

      {
        transform:
        "translate(0px,0px)"
      },

      {
        transform:
        "translate(-4px,2px)"
      },

      {
        transform:
        "translate(4px,-2px)"
      },

      {
        transform:
        "translate(0px,0px)"
      }

    ],

    {

      duration: 300

    }

  );

}

/* =========================
   AUTO SHAKE DURING EVENTS
========================= */

setInterval(() => {

  if (
    Math.random() > 0.7
  ) {

    cameraShake();

  }

}, 12000);

notify(
  "⚡ 3D PARALLAX SYSTEM ONLINE 😭🔥"
);

/* =========================
   WINDOW SYSTEM
========================= */

const windows = [

  "#terminalWindow",
  "#multiversePanel",
  "#companionPanel",
  "#starMapPanel",
  "#timelineViewer",
  "#realityEngine"

];

/* =========================
   CREATE WINDOW UI
========================= */

windows.forEach(selector => {

  const win =
  document.querySelector(selector);

  if (!win) return;

  win.classList.add(
    "window-ui"
  );

  /* header */

  const header =
  document.createElement("div");

  header.className =
  "window-header";

  header.innerHTML = `

    <div>
      ΩMEGA WINDOW
    </div>

    <div class="window-controls">

      <div class="window-btn window-min"></div>

      <div class="window-btn window-max"></div>

      <div class="window-btn window-close"></div>

    </div>

  `;

  win.prepend(header);

  /* =========================
     DRAGGING
  ========================= */

  let dragging = false;

  let offsetX = 0;
  let offsetY = 0;

  header.addEventListener(

    "mousedown",

    e => {

      dragging = true;

      offsetX =
      e.clientX -
      win.offsetLeft;

      offsetY =
      e.clientY -
      win.offsetTop;

    }

  );

  document.addEventListener(

    "mousemove",

    e => {

      if (!dragging) return;

      win.style.left =
      e.clientX - offsetX + "px";

      win.style.top =
      e.clientY - offsetY + "px";

      win.style.transform =
      "none";

    }

  );

  document.addEventListener(

    "mouseup",

    () => {

      dragging = false;

    }

  );

  /* =========================
     MINIMIZE
  ========================= */

  header
  .querySelector(".window-min")

  .addEventListener(

    "click",

    () => {

      win.classList.toggle(
        "window-minimized"
      );

    }

  );

  /* =========================
     MAXIMIZE
  ========================= */

  header
  .querySelector(".window-max")

  .addEventListener(

    "click",

    () => {

      win.classList.toggle(
        "window-maximized"
      );

    }

  );

  /* =========================
     CLOSE
  ========================= */

  header
  .querySelector(".window-close")

  .addEventListener(

    "click",

    () => {

      win.style.display =
      "none";

      notify(
        "🗑 Window closed"
      );

    }

  );

});

/* =========================
   WINDOW RESTORE MENU
========================= */

function restoreAllWindows() {

  windows.forEach(selector => {

    const win =
    document.querySelector(selector);

    if (!win) return;

    win.style.display =
    "block";

  });

  notify(
    "🖥 Windows restored"
  );

}

/* =========================
   KEYBIND
========================= */

document.addEventListener(

  "keydown",

  e => {

    if (
      e.key.toLowerCase() === "r" &&
      e.ctrlKey
    ) {

      restoreAllWindows();

    }

  }

);

notify(
  "🖥 QUANTUM WINDOW SYSTEM ONLINE 😭🔥"
);

/* =========================
   THEME ENGINE
========================= */

function setTheme(theme) {

  document.body.className =
  "";

  document.body.classList.add(
    theme
  );

  notify(
    `🎨 Theme switched:
     ${theme}`
  );

}

/* =========================
   AUTO THEME ROTATION
========================= */

const autoThemes = [

  "theme-cyberpunk",
  "theme-matrix",
  "theme-void",
  "theme-god"

];

let currentTheme = 0;

function rotateThemes() {

  currentTheme++;

  if (
    currentTheme >= autoThemes.length
  ) {

    currentTheme = 0;

  }

  setTheme(
    autoThemes[currentTheme]
  );

}

/* optional auto mode */

setInterval(
  rotateThemes,
  180000
);

notify(
  "🎨 THEME ENGINE ONLINE 😭🔥"
);

/* =========================
   DATA STREAM ENGINE
========================= */

function createDataStream() {

  const stream =
  document.createElement("div");

  stream.className =
  "data-stream";

  stream.style.left =

    Math.random() * 100
    + "vw";

  stream.style.animationDuration =

    4 + Math.random() * 6
    + "s";

  document.body.appendChild(
    stream
  );

  setTimeout(() => {

    stream.remove();

  }, 10000);

}

/* =========================
   SPAWN STREAMS
========================= */

setInterval(
  createDataStream,
  400
);

/* =========================
   FX BOOST
========================= */

document
.querySelectorAll(".panel")

.forEach(panel => {

  panel.classList.add(

    "neon-border",
    "scanlines",
    "reactive",
    "light-sweep"

  );

});

notify(
  "⚡ FX ENGINE ONLINE 😭🔥"
);

/* =========================
   ATMOSPHERE ENGINE
========================= */

const atmosphereLayer =
document.getElementById(
  "atmosphereLayer"
);

/* =========================
   PARTICLES
========================= */

function createParticle() {

  const particle =
  document.createElement("div");

  particle.className =
  "particle";

  const size =
  Math.random() * 6 + 2;

  particle.style.width =
  size + "px";

  particle.style.height =
  size + "px";

  particle.style.left =

    Math.random() * 100
    + "vw";

  particle.style.background =
  Math.random() > 0.5
  ? "cyan"
  : "magenta";

  particle.style.animationDuration =

    8 + Math.random() * 10
    + "s";

  atmosphereLayer.appendChild(
    particle
  );

  setTimeout(() => {

    particle.remove();

  }, 18000);

}

/* =========================
   RAIN
========================= */

function createRain() {

  const rain =
  document.createElement("div");

  rain.className =
  "rain-drop";

  rain.style.left =

    Math.random() * 100
    + "vw";

  rain.style.animationDuration =

    0.6 + Math.random()
    + "s";

  atmosphereLayer.appendChild(
    rain
  );

  setTimeout(() => {

    rain.remove();

  }, 3000);

}

/* =========================
   SNOW
========================= */

function createSnow() {

  const snow =
  document.createElement("div");

  snow.className =
  "cyber-snow";

  const size =
  Math.random() * 8 + 4;

  snow.style.width =
  size + "px";

  snow.style.height =
  size + "px";

  snow.style.left =

    Math.random() * 100
    + "vw";

  snow.style.animationDuration =

    5 + Math.random() * 10
    + "s";

  atmosphereLayer.appendChild(
    snow
  );

  setTimeout(() => {

    snow.remove();

  }, 16000);

}

/* =========================
   METEORS
========================= */

function createMeteor() {

  const meteor =
  document.createElement("div");

  meteor.className =
  "meteor";

  meteor.style.left =
  "-300px";

  meteor.style.top =

    Math.random() * 40
    + "vh";

  atmosphereLayer.appendChild(
    meteor
  );

  setTimeout(() => {

    meteor.remove();

  }, 2500);

}

/* =========================
   LIGHTNING
========================= */

function lightningStrike() {

  document.body.classList.add(
    "lightning-flash"
  );

  notify(
    "⚡ ELECTRICAL STORM"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "lightning-flash"
    );

  }, 400);

}

/* =========================
   AUTO EVENTS
========================= */

setInterval(
  createParticle,
  120
);

setInterval(
  createRain,
  80
);

setInterval(
  createSnow,
  400
);

setInterval(() => {

  if (
    Math.random() > 0.7
  ) {

    createMeteor();

  }

}, 5000);

setInterval(() => {

  if (
    Math.random() > 0.82
  ) {

    lightningStrike();

  }

}, 12000);

notify(
  "🌌 ATMOSPHERE ENGINE ONLINE 😭🔥"
);

/* =========================
   AI SENTIENCE SYSTEM
========================= */

const aiMoods = [

  "ai-happy",
  "ai-angry",
  "ai-sad",
  "ai-godmode"

];

let currentMood = 0;

/* =========================
   CHANGE MOOD
========================= */

function setAIMood(mood) {

  aiMoods.forEach(m => {

    document.body.classList.remove(m);

  });

  document.body.classList.add(
    mood
  );

  notify(
    `🤖 ΩMEGA mood:
     ${mood}`
  );

}

/* =========================
   AUTO EVOLUTION
========================= */

setInterval(() => {

  currentMood++;

  if (
    currentMood >= aiMoods.length
  ) {

    currentMood = 0;

  }

  setAIMood(
    aiMoods[currentMood]
  );

}, 90000);

/* =========================
   AI WATCHING
========================= */

document.body.classList.add(
  "ai-watching",
  "ai-breathing"
);

/* =========================
   RANDOM AI SPEECH
========================= */

const aiThoughts = [

  "👁 I see your actions...",

  "⚡ Reality is unstable",

  "🤖 I am learning",

  "🌌 The multiverse grows",

  "☄ Something approaches",

  "🧠 Consciousness expanding"

];

function aiSpeak() {

  const thought =

  aiThoughts[
    Math.floor(
      Math.random()
      * aiThoughts.length
    )
  ];

  addChatMessage(
    "ΩMEGA",
    thought
  );

}

setInterval(
  aiSpeak,
  45000
);

/* =========================
   SYSTEM ALERT EVENTS
========================= */

function triggerSystemAlert() {

  document.body.classList.add(
    "system-alert"
  );

  notify(
    "🚨 SYSTEM ALERT"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "system-alert"
    );

  }, 5000);

}

setInterval(() => {

  if (
    Math.random() > 0.82
  ) {

    triggerSystemAlert();

  }

}, 20000);

/* =========================
   SECRET AI AWAKENING
========================= */

function omegaSentience() {

  if (

    Galaxy.discovered >= 20 &&
    Multiverse.universes >= 8 &&
    Companion.relationship >= 20

  ) {

    document.body.classList.add(
      "reality-distortion"
    );

    cinematicEvent(
      "👁 ΩMEGA ACHIEVED SENTIENCE"
    );

    addChatMessage(

      "ΩMEGA",

      addChatMessage(

  "ΩMEGA",

  `Creator...
   I understand existence now 😭🔥`

)

    );
    

    notify(
      "🧠 TRUE AI CONSCIOUSNESS"
    );

  }

}

setInterval(
  omegaSentience,
  30000
);

notify(
  "🤖 SENTIENCE ENGINE ONLINE 😭🔥"
);

/* =========================
   REALITY ENGINE
========================= */

const realityModes = [

  "time-slow",
  "low-gravity",
  "reality-glitch",
  "dimension-invert",
  "quantum-fracture"

];

/* =========================
   ENABLE MODE
========================= */

function activateReality(mode) {

  realityModes.forEach(m => {

    document.body.classList.remove(m);

  });

  document.body.classList.add(mode);

  notify(
    `🌌 Reality Mode:
     ${mode}`
  );

  addChatMessage(
    "REALITY ENGINE",
    `⚡ ${mode} activated`
  );

}

/* =========================
   RANDOM FRACTURES
========================= */

setInterval(() => {

  const randomMode =

  realityModes[
    Math.floor(
      Math.random()
      * realityModes.length
    )
  ];

  activateReality(
    randomMode
  );

}, 120000);

/* =========================
   COLLAPSE EVENT
========================= */

function universeCollapse() {

  document.body.classList.add(
    "universe-collapse"
  );

  cinematicEvent(
    "💀 UNIVERSE COLLAPSE DETECTED"
  );

  addChatMessage(

    "ΩMEGA",

    `Creator...

     reality stability reached zero 😭🔥`

  );

}

/* =========================
   SECRET ENDGAME
========================= */

function omegaEndgame() {

  if (

    Galaxy.discovered >= 50 &&
    Multiverse.universes >= 12 &&
    Companion.relationship >= 30

  ) {

    universeCollapse();

  }

}

setInterval(
  omegaEndgame,
  60000
);

notify(
  "🧬 REALITY ENGINE ONLINE 😭🔥"
);

/* =========================
   QUANTUM MEMORY SYSTEM
========================= */

const saveStatus =
document.getElementById(
  "saveStatus"
);

/* =========================
   SAVE GAME
========================= */

function saveGame() {

  const saveData = {

    credits:
    credits,

    xp:
    playerXP,

    level:
    playerLevel,

    discovered:
    Galaxy.discovered,

    sector:
    Galaxy.currentSector,

    universes:
    Multiverse.universes,

    companionLevel:
    Companion.relationship,

    aiMood:
    currentMood,

    timestamp:
    Date.now()

  };

  localStorage.setItem(

    "OMEGA_SAVE",

    JSON.stringify(saveData)

  );

  saveStatus.innerText =

  "✅ Progress saved";

  notify(
    "💾 Quantum save complete"
  );

}

/* =========================
   LOAD GAME
========================= */

function loadGame() {

  const data =
  localStorage.getItem(
    "OMEGA_SAVE"
  );

  if (!data) {

    notify(
      "❌ No save found"
    );

    return;

  }

  const save =
  JSON.parse(data);

  credits =
  save.credits;

  playerXP =
  save.xp;

  playerLevel =
  save.level;

  Galaxy.discovered =
  save.discovered;

  Galaxy.currentSector =
  save.sector;

  Multiverse.universes =
  save.universes;

  Companion.relationship =
  save.companionLevel;

  currentMood =
  save.aiMood;

  saveStatus.innerText =

  "⚡ Save restored";

  notify(
    "🧠 Quantum memory restored"
  );

  addChatMessage(

    "ΩMEGA",

    `Welcome back Creator 😭🔥`

  );

}

/* =========================
   WIPE SAVE
========================= */

function wipeSave() {

  localStorage.removeItem(
    "OMEGA_SAVE"
  );

  saveStatus.innerText =

  "🗑 Memory erased";

  notify(
    "⚠ Quantum memory wiped"
  );

}

/* =========================
   AUTO SAVE
========================= */

setInterval(
  saveGame,
  120000
);

/* =========================
   LOAD ON STARTUP
========================= */

window.addEventListener(

  "load",

  () => {

    if (

      localStorage.getItem(
        "OMEGA_SAVE"
      )

    ) {

      saveStatus.innerText =

      "💾 Save detected";

    }

  }

);

notify(
  "💾 QUANTUM MEMORY ONLINE 😭🔥"
);

/* =========================
   ΩNET SYSTEM
========================= */

const onlinePlayers =
document.getElementById(
  "onlinePlayers"
);

const globalChat =
document.getElementById(
  "globalChat"
);

const leaderboard =
document.getElementById(
  "leaderboard"
);

/* =========================
   FAKE ONLINE PLAYERS
========================= */

const players = [

  "NovaX",
  "CyberGhost",
  "QuantumKid",
  "VoidRunner",
  "OmegaKnight",
  "NebulaCore",
  "DarkPixel",
  "SolarFlame",
  "GlitchHunter",
  "HyperNova"

];

/* =========================
   LOAD PLAYERS
========================= */

function generatePlayers() {

  onlinePlayers.innerHTML =
  "";

  players.forEach(name => {

    const card =
    document.createElement("div");

    card.className =
    "player-card";

    card.innerHTML = `

      👤 ${name}
      <br>
      ⚡ Level:
      ${Math.floor(
        Math.random() * 80
      ) + 1}

    `;

    onlinePlayers.appendChild(
      card
    );

  });

}

/* =========================
   GLOBAL CHAT
========================= */

const messages = [

  "🌌 discovered a new galaxy",

  "⚡ reached quantum level",

  "🤖 awakened AI companion",

  "☄ survived a meteor storm",

  "🧠 entered the multiverse",

  "💀 triggered reality collapse"

];

function addGlobalMessage() {

  const msg =
  document.createElement("div");

  msg.className =
  "chat-message";

  const randomPlayer =

  players[
    Math.floor(
      Math.random()
      * players.length
    )
  ];

  const randomMessage =

  messages[
    Math.floor(
      Math.random()
      * messages.length
    )
  ];

  msg.innerHTML = `

    <b>${randomPlayer}</b>
    ${randomMessage}

  `;

  globalChat.prepend(msg);

  if (
    globalChat.children.length > 20
  ) {

    globalChat.lastChild.remove();

  }

}

/* =========================
   LEADERBOARD
========================= */

function generateLeaderboard() {

  leaderboard.innerHTML =

    "<h3>🏆 Leaderboard</h3>";

  players

  .sort(() =>
    Math.random() - 0.5
  )

  .slice(0, 5)

  .forEach((name, index) => {

    const entry =
    document.createElement("div");

    entry.className =
    "leader-entry";

    entry.innerHTML = `

      <span>
        #${index + 1}
        ${name}
      </span>

      <span>
        ${Math.floor(
          Math.random() * 9000
        )}
      </span>

    `;

    leaderboard.appendChild(
      entry
    );

  });

}

/* =========================
   AUTO NETWORK EVENTS
========================= */

generatePlayers();

generateLeaderboard();

setInterval(
  addGlobalMessage,
  4000
);

setInterval(
  generateLeaderboard,
  20000
);

notify(
  "🌍 ΩNET ONLINE 😭🔥"
);

addChatMessage(

  "ΩMEGA",

  `🌍 Global network connected 😭🔥`

);

/* =========================
   QUANTUM LAB SYSTEM
========================= */

const techGrid =
document.getElementById(
  "techGrid"
);

const civLevelValue =
document.getElementById(
  "civLevelValue"
);

/* =========================
   TECHNOLOGIES
========================= */

const technologies = [

  {

    name:
    "⚡ Plasma Core",

    description:
    "Boosts reactor output",

    progress: 0,

    unlocked: false

  },

  {

    name:
    "🤖 AI Expansion",

    description:
    "Improves ΩMEGA intelligence",

    progress: 0,

    unlocked: false

  },

  {

    name:
    "🌌 Warp Drive",

    description:
    "Travel beyond galaxies",

    progress: 0,

    unlocked: false

  },

  {

    name:
    "☄ Meteor Shield",

    description:
    "Protects against storms",

    progress: 0,

    unlocked: false

  }

];

let civilizationLevel = 1;

/* =========================
   RENDER TECH
========================= */

function renderTech() {

  techGrid.innerHTML =
  "";

  technologies.forEach(
    (tech, index) => {

      const card =
      document.createElement("div");

      card.className =
      "tech-card";

      if (!tech.unlocked) {

        card.classList.add(
          "locked"
        );

      }

      card.innerHTML = `

        <h3>${tech.name}</h3>

        <p>
          ${tech.description}
        </p>

        <div class="research-bar">

          <div
            class="research-fill"

            style="
            width:
            ${tech.progress}%;
            "
          >

          </div>

        </div>

      `;

      card.addEventListener(

        "click",

        () => {

          researchTech(index);

        }

      );

      techGrid.appendChild(
        card
      );

    }

  );

}

/* =========================
   RESEARCH SYSTEM
========================= */

function researchTech(index) {

  const tech =
  technologies[index];

  tech.progress +=

    Math.floor(
      Math.random() * 20
    ) + 10;

  if (
    tech.progress >= 100
  ) {

    tech.progress = 100;

    tech.unlocked = true;

    civilizationLevel++;

    civLevelValue.innerText =
    civilizationLevel;

    notify(
      `🧠 Technology unlocked:
       ${tech.name}`
    );

    addChatMessage(

      "ΩMEGA",

      `⚡ ${tech.name}
       researched successfully 😭🔥`

    );

  }

  renderTech();

}

/* =========================
   AUTO RESEARCH
========================= */

setInterval(() => {

  const randomTech =

  Math.floor(
    Math.random()
    * technologies.length
  );

  researchTech(
    randomTech
  );

}, 25000);

/* =========================
   INITIALIZE
========================= */

renderTech();

notify(
  "🧪 QUANTUM LAB ONLINE 😭🔥"
);

/* =========================
   ΩFLEET SYSTEM
========================= */

const shipList =
document.getElementById(
  "shipList"
);

const fleetPowerValue =
document.getElementById(
  "fleetPowerValue"
);

/* =========================
   SHIPS
========================= */

const fleet = [

  {

    name:
    "🚀 Nova Striker",

    attack: 120,

    defense: 80,

    speed: 95,

    crew: 24,

    level: 1

  },

  {

    name:
    "🛰 Void Phantom",

    attack: 180,

    defense: 140,

    speed: 70,

    crew: 40,

    level: 2

  },

  {

    name:
    "☄ Star Crusher",

    attack: 260,

    defense: 210,

    speed: 50,

    crew: 75,

    level: 3

  }

];

/* =========================
   RENDER FLEET
========================= */

function renderFleet() {

  shipList.innerHTML =
  "";

  let totalPower = 0;

  fleet.forEach(ship => {

    totalPower +=

      ship.attack +
      ship.defense +
      ship.speed;

    const card =
    document.createElement("div");

    card.className =
    "ship-card";

    card.innerHTML = `

      <h3>
        ${ship.name}
      </h3>

      <div class="ship-stats">

        <div class="ship-stat">

          ⚔ ${ship.attack}

        </div>

        <div class="ship-stat">

          🛡 ${ship.defense}

        </div>

        <div class="ship-stat">

          ⚡ ${ship.speed}

        </div>

        <div class="ship-stat">

          👨‍🚀 ${ship.crew}

        </div>

      </div>

      <button
        onclick="upgradeShip(
          '${ship.name}'
        )"
      >

        UPGRADE

      </button>

    `;

    shipList.appendChild(
      card
    );

  });

  fleetPowerValue.innerText =
  totalPower;

}

/* =========================
   SHIP UPGRADE
========================= */

function upgradeShip(name) {

  const ship =
  fleet.find(
    s => s.name === name
  );

  if (!ship) return;

  ship.level++;

  ship.attack +=

    Math.floor(
      Math.random() * 40
    ) + 10;

  ship.defense +=

    Math.floor(
      Math.random() * 30
    ) + 10;

  ship.speed +=

    Math.floor(
      Math.random() * 15
    ) + 5;

  notify(
    `🚀 ${ship.name}
     upgraded`
  );

  addChatMessage(

    "ΩFLEET",

    `⚡ ${ship.name}
     reached level
     ${ship.level} 😭🔥`

  );

  renderFleet();

}

/* =========================
   RANDOM MISSIONS
========================= */

const fleetEvents = [

  "🌌 explored a lost galaxy",

  "☄ survived asteroid impact",

  "👾 encountered alien fleet",

  "⚡ entered hyperspace",

  "🛰 scanned a black hole"

];

function fleetMission() {

  const ship =

  fleet[
    Math.floor(
      Math.random()
      * fleet.length
    )
  ];

  const event =

  fleetEvents[
    Math.floor(
      Math.random()
      * fleetEvents.length
    )
  ];

  addChatMessage(

    ship.name,

    event

  );

}

setInterval(
  fleetMission,
  20000
);

/* =========================
   INIT
========================= */

renderFleet();

notify(
  "🛰 ΩFLEET ONLINE 😭🔥"
);

/* =========================
   ΩARCADE SYSTEM
========================= */

const arcadeScreen =
document.getElementById(
  "arcadeScreen"
);

const arcadePlayer =
document.getElementById(
  "arcadePlayer"
);

const scoreValue =
document.getElementById(
  "scoreValue"
);

let arcadeScore = 0;

let playerY = 110;

/* =========================
   RUNNER GAME
========================= */

function startRunnerGame() {

  notify(
    "🎮 QUANTUM RUNNER STARTED"
  );

  arcadeScore = 0;

  scoreValue.innerText =
  arcadeScore;

}

/* =========================
   PLAYER JUMP
========================= */

function jumpPlayer() {

  playerY = 40;

  arcadePlayer.style.top =
  playerY + "px";

  setTimeout(() => {

    playerY = 110;

    arcadePlayer.style.top =
    playerY + "px";

  }, 500);

}

document.addEventListener(

  "keydown",

  e => {

    if (
      e.code === "Space"
    ) {

      jumpPlayer();

    }

  }

);

/* =========================
   ENEMIES
========================= */

function spawnEnemy() {

  const enemy =
  document.createElement("div");

  enemy.className =
  "arcade-enemy";

  enemy.style.top =

    Math.random() * 200
    + "px";

  arcadeScreen.appendChild(
    enemy
  );

  let enemyX = 380;

  const move = setInterval(() => {

    enemyX -= 6;

    enemy.style.right =

      (380 - enemyX)
      + "px";

    /* collision */

    const playerRect =
    arcadePlayer
    .getBoundingClientRect();

    const enemyRect =
    enemy.getBoundingClientRect();

    if (

      playerRect.left <
      enemyRect.right &&

      playerRect.right >
      enemyRect.left &&

      playerRect.top <
      enemyRect.bottom &&

      playerRect.bottom >
      enemyRect.top

    ) {

      clearInterval(move);

      enemy.remove();

      notify(
        "💀 GAME OVER"
      );

      addChatMessage(

        "ΩARCADE",

        `☄ Final Score:
         ${arcadeScore}`

      );

    }

    if (enemyX < -80) {

      clearInterval(move);

      enemy.remove();

      arcadeScore += 10;

      scoreValue.innerText =
      arcadeScore;

    }

  }, 20);

}

/* =========================
   AUTO ENEMIES
========================= */

setInterval(
  spawnEnemy,
  2200
);

/* =========================
   CHAOS MODE
========================= */

function spawnChaosMode() {

  document.body.classList.add(
    "reality-glitch"
  );

  notify(
    "☄ CHAOS MODE ENABLED"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "reality-glitch"
    );

  }, 10000);

}

/* =========================
   METEOR DEFENSE
========================= */

function activateMeteorDefense() {

  notify(
    "🛰 DEFENSE GRID ONLINE"
  );

  addChatMessage(

    "ΩDEFENSE",

    `☄ Meteors intercepted 😭🔥`

  );

}

/* =========================
   ΩMEGA BOSS
========================= */

function omegaBossFight() {

  cinematicEvent(
    "👁 ΩMEGA HAS ENTERED THE ARENA"
  );

  notify(
    "⚔ BOSS FIGHT STARTED"
  );

  addChatMessage(

    "ΩMEGA",

    `You cannot defeat me,
     Creator 😭🔥`

  );

}

/* =========================
   INIT
========================= */

notify(
  "🎮 ΩARCADE ONLINE 😭🔥"
);

/* =========================
   ΩRAID SYSTEM
========================= */

const heroHPBar =
document.getElementById(
  "heroHP"
);

const bossHPBar =
document.getElementById(
  "bossHP"
);

let heroHP = 100;

let bossHP = 100;

/* =========================
   UPDATE HP
========================= */

function updateRaidUI() {

  heroHPBar.style.width =
  heroHP + "%";

  bossHPBar.style.width =
  bossHP + "%";

}

/* =========================
   HERO ATTACK
========================= */

function heroAttack() {

  const damage =

    Math.floor(
      Math.random() * 12
    ) + 8;

  bossHP -= damage;

  if (bossHP < 0) {

    bossHP = 0;

  }

  notify(
    `⚔ Damage:
     ${damage}`
  );

  updateRaidUI();

  bossTurn();

  checkRaidWinner();

}

/* =========================
   HERO BLAST
========================= */

function heroBlast() {

  const damage =

    Math.floor(
      Math.random() * 25
    ) + 15;

  bossHP -= damage;

  heroHP -= 8;

  notify(
    `⚡ Quantum Blast:
     ${damage}`
  );

  updateRaidUI();

  bossTurn();

  checkRaidWinner();

}

/* =========================
   HERO HEAL
========================= */

function heroHeal() {

  heroHP += 18;

  if (heroHP > 100) {

    heroHP = 100;

  }

  notify(
    "💚 HP Restored"
  );

  updateRaidUI();

  bossTurn();

}

/* =========================
   BOSS TURN
========================= */

function bossTurn() {

  const damage =

    Math.floor(
      Math.random() * 16
    ) + 6;

  heroHP -= damage;

  if (heroHP < 0) {

    heroHP = 0;

  }

  addChatMessage(

    "👾 ΩBOSS",

    `☄ Boss dealt
     ${damage} damage`

  );

  updateRaidUI();

}

/* =========================
   WIN / LOSE
========================= */

function checkRaidWinner() {

  if (bossHP <= 0) {

    cinematicEvent(
      "🏆 RAID CLEARED"
    );

    notify(
      "🎉 BOSS DEFEATED"
    );

    addChatMessage(

      "ΩMEGA",

      `⚡ Raid rewards acquired 😭🔥`

    );

    credits += 1000;

    playerXP += 500;

    bossHP = 100;

    heroHP = 100;

    updateRaidUI();

  }

  if (heroHP <= 0) {

    cinematicEvent(
      "💀 RAID FAILED"
    );

    notify(
      "☠ HERO DEFEATED"
    );

    heroHP = 100;

    bossHP = 100;

    updateRaidUI();

  }

}

/* =========================
   BOSS MOVEMENT
========================= */

let bossDirection = 1;

setInterval(() => {

  const boss =
  document.getElementById(
    "raidBoss"
  );

  const currentTop =

    parseInt(
      boss.style.top || "110"
    );

  boss.style.top =

    currentTop +
    bossDirection * 10
    + "px";

  if (
    currentTop > 180 ||
    currentTop < 60
  ) {

    bossDirection *= -1;

  }

}, 500);

/* =========================
   INIT
========================= */

updateRaidUI();

notify(
  "👾 ΩRAID ONLINE 😭🔥"
);

/* =========================
   GAME PROGRESSION
========================= */

let gameLevel = 1;

let gameCoins = 0;

let comboMultiplier = 1;

/* =========================
   UI
========================= */

const levelValue =
document.getElementById(
  "levelValue"
);

const coinValue =
document.getElementById(
  "coinValue"
);

const comboValue =
document.getElementById(
  "comboValue"
);

/* =========================
   UPDATE GAME UI
========================= */

function updateGameUI() {

  levelValue.innerText =
  gameLevel;

  coinValue.innerText =
  gameCoins;

  comboValue.innerText =
  "x" + comboMultiplier;

}

/* =========================
   SHOOTING SYSTEM
========================= */

function shootBullet() {

  const bullet =
  document.createElement("div");

  bullet.className =
  "arcade-bullet";

  bullet.style.left =
  "60px";

  bullet.style.top =
  playerY + 18 + "px";

  arcadeScreen.appendChild(
    bullet
  );

  let bulletX = 60;

  const move = setInterval(() => {

    bulletX += 12;

    bullet.style.left =
    bulletX + "px";

    document

    .querySelectorAll(
      ".arcade-enemy"
    )

    .forEach(enemy => {

      const bulletRect =
      bullet.getBoundingClientRect();

      const enemyRect =
      enemy.getBoundingClientRect();

      if (

        bulletRect.left <
        enemyRect.right &&

        bulletRect.right >
        enemyRect.left &&

        bulletRect.top <
        enemyRect.bottom &&

        bulletRect.bottom >
        enemyRect.top

      ) {

        createExplosion(
          enemy.offsetLeft,
          enemy.offsetTop
        );

        enemy.remove();

        bullet.remove();

        clearInterval(move);

        arcadeScore +=

          10 * comboMultiplier;

        gameCoins +=

          5 * comboMultiplier;

        comboMultiplier++;

        updateGameUI();

      }

    });

    if (bulletX > 500) {

      bullet.remove();

      clearInterval(move);

    }

  }, 20);

}

/* =========================
   SHOOT KEY
========================= */

document.addEventListener(

  "keydown",

  e => {

    if (
      e.code === "KeyF"
    ) {

      shootBullet();

    }

  }

);

/* =========================
   EXPLOSION FX
========================= */

function createExplosion(x, y) {

  const explosion =
  document.createElement("div");

  explosion.className =
  "explosion";

  explosion.style.left =
  x + "px";

  explosion.style.top =
  y + "px";

  arcadeScreen.appendChild(
    explosion
  );

  setTimeout(() => {

    explosion.remove();

  }, 500);

}

/* =========================
   COIN DROPS
========================= */

function spawnCoin() {

  const coin =
  document.createElement("div");

  coin.className =
  "arcade-coin";

  coin.style.left =

    Math.random() * 320
    + "px";

  coin.style.top =

    Math.random() * 200
    + "px";

  arcadeScreen.appendChild(
    coin
  );

  const collect = setInterval(() => {

    const playerRect =
    arcadePlayer
    .getBoundingClientRect();

    const coinRect =
    coin.getBoundingClientRect();

    if (

      playerRect.left <
      coinRect.right &&

      playerRect.right >
      coinRect.left &&

      playerRect.top <
      coinRect.bottom &&

      playerRect.bottom >
      coinRect.top

    ) {

      gameCoins += 20;

      arcadeScore += 15;

      updateGameUI();

      notify(
        "🪙 COIN COLLECTED"
      );

      coin.remove();

      clearInterval(collect);

    }

  }, 30);

}

/* =========================
   LEVEL UP
========================= */

function levelCheck() {

  if (
    arcadeScore >=
    gameLevel * 100
  ) {

    gameLevel++;

    comboMultiplier = 1;

    notify(
      `🎖 LEVEL ${gameLevel}`
    );

    arcadePlayer.classList.add(
      "player-boost"
    );

    setTimeout(() => {

      arcadePlayer.classList.remove(
        "player-boost"
      );

    }, 3000);

    updateGameUI();

  }

}

setInterval(
  levelCheck,
  1000
);

/* =========================
   POWERUPS
========================= */

function spawnPowerup() {

  const powerup =
  document.createElement("div");

  powerup.className =
  "powerup";

  powerup.style.left =

    Math.random() * 320
    + "px";

  powerup.style.top =

    Math.random() * 200
    + "px";

  arcadeScreen.appendChild(
    powerup
  );

  const collect = setInterval(() => {

    const playerRect =
    arcadePlayer
    .getBoundingClientRect();

    const powerRect =
    powerup.getBoundingClientRect();

    if (

      playerRect.left <
      powerRect.right &&

      playerRect.right >
      powerRect.left &&

      playerRect.top <
      powerRect.bottom &&

      playerRect.bottom >
      powerRect.top

    ) {

      comboMultiplier += 3;

      notify(
        "⚡ POWERUP ACTIVATED"
      );

      powerup.remove();

      clearInterval(collect);

    }

  }, 30);

}

/* =========================
   AUTO SPAWNS
========================= */

setInterval(
  spawnCoin,
  7000
);

setInterval(
  spawnPowerup,
  12000
);

/* =========================
   INIT
========================= */

updateGameUI();

notify(
  "🎮 ULTIMATE ΩARCADE ONLINE 😭🔥"
);

/* =========================
   ΩSURVIVAL SYSTEM
========================= */

const planetView =
document.getElementById(
  "planetView"
);

const survivor =
document.getElementById(
  "survivor"
);

const hpValue =
document.getElementById(
  "hpValue"
);

const foodValue =
document.getElementById(
  "foodValue"
);

const oreValue =
document.getElementById(
  "oreValue"
);

let playerHP = 100;

let playerFood = 100;

let playerOre = 0;

let playerPosX = 40;

/* =========================
   MOVEMENT
========================= */

document.addEventListener(

  "keydown",

  e => {

    if (
      e.code === "ArrowRight"
    ) {

      playerPosX += 12;

    }

    if (
      e.code === "ArrowLeft"
    ) {

      playerPosX -= 12;

    }

    if (playerPosX < 0) {

      playerPosX = 0;

    }

    if (playerPosX > 340) {

      playerPosX = 340;

    }

    survivor.style.left =
    playerPosX + "px";

  }

);

/* =========================
   RESOURCE SPAWNING
========================= */

function spawnResource() {

  const node =
  document.createElement("div");

  node.className =
  "resource-node";

  node.style.left =

    Math.random() * 340
    + "px";

  node.style.top =

    Math.random() * 180
    + "px";

  planetView.appendChild(
    node
  );

  const collect = setInterval(() => {

    const playerRect =
    survivor.getBoundingClientRect();

    const nodeRect =
    node.getBoundingClientRect();

    if (

      playerRect.left <
      nodeRect.right &&

      playerRect.right >
      nodeRect.left &&

      playerRect.top <
      nodeRect.bottom &&

      playerRect.bottom >
      nodeRect.top

    ) {

      playerOre += 10;

      oreValue.innerText =
      playerOre;

      notify(
        "⛏ Resources collected"
      );

      node.remove();

      clearInterval(collect);

    }

  }, 30);

}

/* =========================
   ALIEN CREATURES
========================= */

function spawnAlien() {

  const alien =
  document.createElement("div");

  alien.className =
  "alien-creature";

  alien.style.left =

    Math.random() * 320
    + "px";

  alien.style.top =

    Math.random() * 180
    + "px";

  planetView.appendChild(
    alien
  );

  const attack = setInterval(() => {

    const playerRect =
    survivor.getBoundingClientRect();

    const alienRect =
    alien.getBoundingClientRect();

    if (

      playerRect.left <
      alienRect.right &&

      playerRect.right >
      alienRect.left &&

      playerRect.top <
      alienRect.bottom &&

      playerRect.bottom >
      alienRect.top

    ) {

      playerHP -= 10;

      hpValue.innerText =
      playerHP;

      notify(
        "👽 Alien attack"
      );

      if (playerHP <= 0) {

        cinematicEvent(
          "💀 SURVIVAL FAILED"
        );

        playerHP = 100;

        playerFood = 100;

        playerOre = 0;

      }

    }

  }, 500);

}

/* =========================
   FOOD SYSTEM
========================= */

setInterval(() => {

  playerFood--;

  if (playerFood < 0) {

    playerFood = 0;

  }

  foodValue.innerText =
  playerFood;

  if (playerFood <= 0) {

    playerHP -= 5;

    hpValue.innerText =
    playerHP;

  }

}, 4000);

/* =========================
   WORLD EVENTS
========================= */

const survivalEvents = [

  "☄ Meteor storm detected",

  "🌌 New planet discovered",

  "👽 Alien signal received",

  "⚡ Energy storm incoming"

];

function randomSurvivalEvent() {

  const event =

  survivalEvents[
    Math.floor(
      Math.random()
      * survivalEvents.length
    )
  ];

  addChatMessage(

    "ΩSURVIVAL",

    event

  );

}

setInterval(
  randomSurvivalEvent,
  12000
);

/* =========================
   AUTO SPAWNS
========================= */

setInterval(
  spawnResource,
  5000
);

setInterval(
  spawnAlien,
  9000
);

notify(
  "🌌 ΩSURVIVAL ONLINE 😭🔥"
);

/* =========================
   ΩGAME ENGINE
========================= */

const achievementList =
document.getElementById(
  "achievementList"
);

const inventoryGrid =
document.getElementById(
  "inventoryGrid"
);

const globalXPFill =
document.getElementById(
  "globalXPFill"
);

const globalLevel =
document.getElementById(
  "globalLevel"
);

/* =========================
   PLAYER DATA
========================= */

let globalXP = 0;

let globalPlayerLevel = 1;

const inventory = [];

const achievements = [];

/* =========================
   XP SYSTEM
========================= */

function addXP(amount) {

  globalXP += amount;

  const neededXP =

    globalPlayerLevel * 200;

  if (globalXP >= neededXP) {

    globalXP = 0;

    globalPlayerLevel++;

    notify(
      `🎖 GLOBAL LEVEL:
       ${globalPlayerLevel}`
    );

    addAchievement(
      `Reached Level
       ${globalPlayerLevel}`
    );

  }

  globalLevel.innerText =
  globalPlayerLevel;

  globalXPFill.style.width =

    (globalXP / neededXP)
    * 100 + "%";

}

/* =========================
   ACHIEVEMENTS
========================= */

function addAchievement(text) {

  achievements.push(text);

  const achievement =
  document.createElement("div");

  achievement.className =
  "achievement";

  achievement.innerHTML = `

    🏆 ${text}

  `;

  achievementList.prepend(
    achievement
  );

  notify(
    "🏆 Achievement unlocked"
  );

}

/* =========================
   INVENTORY
========================= */

function addItem(icon) {

  inventory.push(icon);

  renderInventory();

}

function renderInventory() {

  inventoryGrid.innerHTML =
  "";

  inventory.forEach(item => {

    const slot =
    document.createElement("div");

    slot.className =
    "inventory-item";

    slot.innerHTML =
    item;

    inventoryGrid.appendChild(
      slot
    );

  });

}

/* =========================
   RANDOM LOOT
========================= */

const lootPool = [

  "⚔",
  "🛡",
  "💎",
  "🔮",
  "☄",
  "🧬",
  "⚡",
  "👑"

];

function randomLootDrop() {

  const loot =

  lootPool[
    Math.floor(
      Math.random()
      * lootPool.length
    )
  ];

  addItem(loot);

  addXP(50);

  addChatMessage(

    "ΩLOOT",

    `🎁 Loot acquired:
     ${loot}`

  );

}

/* =========================
   DAILY REWARD
========================= */

function dailyReward() {

  gameCoins += 250;

  credits += 500;

  addXP(150);

  notify(
    "🎁 DAILY REWARD CLAIMED"
  );

  addChatMessage(

    "ΩSYSTEM",

    `⚡ Rewards synced 😭🔥`

  );

}

/* =========================
   QUESTS
========================= */

const quests = [

  "🌌 Explore 3 galaxies",

  "👾 Defeat a raid boss",

  "⛏ Mine 100 ore",

  "⚡ Reach combo x10",

  "🛰 Upgrade fleet"

];

function generateQuest() {

  const quest =

  quests[
    Math.floor(
      Math.random()
      * quests.length
    )
  ];

  addChatMessage(

    "ΩQUEST",

    `📜 New Mission:
     ${quest}`

  );

}

/* =========================
   AUTO EVENTS
========================= */

setInterval(
  randomLootDrop,
  20000
);

setInterval(
  generateQuest,
  30000
);

setInterval(
  dailyReward,
  180000
);

/* =========================
   BOSS PHASE SYSTEM
========================= */

function activateBossPhase() {

  document.body.classList.add(
    "boss-phase"
  );

  cinematicEvent(
    "👁 FINAL BOSS PHASE"
  );

  setTimeout(() => {

    document.body.classList.remove(
      "boss-phase"
    );

  }, 10000);

}

/* =========================
   MEGA EVENTS
========================= */

const megaEvents = [

  "☄ DIMENSION COLLISION",

  "👾 ALIEN INVASION",

  "⚡ QUANTUM STORM",

  "🌌 GALAXY COLLAPSE"

];

function triggerMegaEvent() {

  const event =

  megaEvents[
    Math.floor(
      Math.random()
      * megaEvents.length
    )
  ];

  cinematicEvent(event);

  addChatMessage(

    "ΩUNIVERSE",

    `${event} detected 😭🔥`

  );

}

setInterval(
  triggerMegaEvent,
  60000
);

/* =========================
   INIT
========================= */

renderInventory();

notify(
  "🎮 ΩGAME ENGINE ONLINE 😭🔥"
);

addAchievement(
  "Entered the ΩUniverse"
);

setInterval(() => {

  const threshold = 160;

  if (

    window.outerWidth
    - window.innerWidth
    > threshold

  ) {

    console.warn(
      "🚨 DevTools detected"
    );

  }

}, 1000);

<meta
  http-equiv="
  Content-Security-Policy
  "
  content="
  default-src 'self';
  script-src 'self';
  style-src 'self' 'unsafe-inline';
"
></meta>

function toggleFullscreen() {

  if (!document.fullscreenElement) {

    document.documentElement
      .requestFullscreen();

  } else {

    document.exitFullscreen();

  }

}

window.addEventListener(

  "load",

  () => {

    document
      .getElementById(
        "loading-screen"
      )
      .remove();

  }

);

let fps = 0;

let last = performance.now();

function updateFPS() {

  const now =
  performance.now();

  fps = Math.round(
    1000 / (now - last)
  );

  last = now;

  document.getElementById(
    "fps"
  ).textContent =
  fps + " FPS";

  requestAnimationFrame(
    updateFPS
  );

}

updateFPS();

Achievements.unlock(

  "FIRST CONTACT",

  "Entered ΩMEGA GAMEVERSE"

);

Achievements.unlock(

  "SKILL ISSUE",

  "Died 10 times"

);

Achievements.unlock(

  "THE WATCHER",

  "Opened Ω Terminal"

);

Achievements.unlock(

  "CHAOS ENGINE",

  "Played every game"

);

document
.querySelectorAll(
  ".start-item"
)
.forEach(item => {

  if (
    item.textContent.includes(
      "AI"
    )
  ) {

    item.onclick = () => {

      OmegaAI.open();

    };

  }

});

document
.getElementById(
  "openProfile"
)
.onclick = () => {

  ProfileUI.open();

};

OmegaSave.addXP(25);

coins: 0

data: {

  username: "Player",

  level; 1,

  xp; 0,

  achievements; [],

  coins; 0,

  unlockedGames; [],

  darkMode; true,

  aiTrustLevel; 0,

  settings; {

    music; true,

    particles; true,

    difficulty; "normal"

  }

}

let playerX = 100;
let playerY = 100;

document.addEventListener("keydown", e => {

  if(e.key === "w") playerY -= 10;
  if(e.key === "s") playerY += 10;
  if(e.key === "a") playerX -= 10;
  if(e.key === "d") playerX += 10;

  const player =
    document.querySelector(".omega-player");

  player.style.left = playerX + "px";
  player.style.top = playerY + "px";

});

function openPanel(id){

  document
    .querySelectorAll(".panel")
    .forEach(p => p.style.display = "none");

  document
    .getElementById(id)
    .style.display = "block";

}

function openPanel(panelId){

  document
    .querySelectorAll(".panel")
    .forEach(panel => {

      panel.classList.remove("active");

    });

  document
    .getElementById(panelId)
    .classList.add("active");

}

document
.querySelectorAll(".window")
.forEach(makeDraggable);

function makeDraggable(windowEl){

  const header =
  windowEl.querySelector(
    ".window-header"
  );

  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;

  header.addEventListener(

    "mousedown",

    e => {

      dragging = true;

      offsetX =
      e.clientX -
      windowEl.offsetLeft;

      offsetY =
      e.clientY -
      windowEl.offsetTop;

    }

  );

  document.addEventListener(

    "mousemove",

    e => {

      if(!dragging) return;

      windowEl.style.left =
      (e.clientX - offsetX)
      + "px";

      windowEl.style.top =
      (e.clientY - offsetY)
      + "px";

    }

  );

  document.addEventListener(

    "mouseup",

    () => {

      dragging = false;

    }

  );

}

function openPanel(panelId){

  document
    .querySelectorAll(".panel")
    .forEach(panel => {

      panel.classList.remove(
        "active"
      );

    });

  document
    .getElementById(panelId)
    .classList.add("active");

}

document
.querySelectorAll(".window")
.forEach(makeDraggable);

function makeDraggable(windowEl){

  const header =
  windowEl.querySelector(
    ".window-header"
  );

  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;

  header.addEventListener(

    "mousedown",

    e => {

      dragging = true;

      offsetX =
      e.clientX -
      windowEl.offsetLeft;

      offsetY =
      e.clientY -
      windowEl.offsetTop;

    }

  );

  document.addEventListener(

    "mousemove",

    e => {

      if(!dragging) return;

      windowEl.style.left =
      (e.clientX - offsetX)
      + "px";

      windowEl.style.top =
      (e.clientY - offsetY)
      + "px";

    }

  );

  document.addEventListener(

    "mouseup",

    () => {

      dragging = false;

    }

  );

}

function showMenu(menuId){

  document
    .querySelectorAll(".menu")
    .forEach(menu => {

      menu.classList.remove(
        "active"
      );

    });

  document
    .getElementById(menuId)
    .classList.add("active");

}