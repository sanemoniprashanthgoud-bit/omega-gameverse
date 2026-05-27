function fakeCheckpoint() {

  notify(
    "💾 CHECKPOINT SAVED"
  );

  setTimeout(() => {

    notify(
      "😈 corrupted checkpoint"
    );

  }, 3000);

}

player.spawn = startLevel;

function fakeVictory() {

  cinematicEvent(

    "🏆 LEVEL COMPLETE"

  );

  setTimeout(() => {

    cinematicEvent(

      "😈 SIKE"

    );

    spawnSecretBoss();

  }, 2500);

}

let controlsFlipped = false;

setInterval(() => {

  controlsFlipped =
  !controlsFlipped;

  notify(

    controlsFlipped
    ? "😈 controls inverted"
    : "😇 controls restored"

  );

}, 45000);

if (controlsFlipped) {

  player.x -= speed;

} else {

  player.x += speed;

}

function fakeCriticalHealth() {

  hpBar.style.width =
  "2%";

  notify(
    "⚠ CRITICAL HEALTH"
  );

  setTimeout(() => {

    hpBar.style.width =
    "100%";

    notify(
      "😈 psychological damage"
    );

  }, 4000);

}

function trollTeleport(enemy) {

  enemy.style.left =

    Math.random() * 600
    + "px";

}

function fakeLoading() {

  const loading =
  document.createElement("div");

  loading.innerHTML = `

    <h1>
      Loading...
      99%
    </h1>

  `;

  document.body.appendChild(
    loading
  );

  setTimeout(() => {

    loading.innerHTML = `

      <h1>
        😈 nevermind
      </h1>

    `;

  }, 8000);

}

function randomNoise() {

  const audio =
  new Audio(
    "audio/glitch.mp3"
  );

  audio.volume = 0.1;

  audio.play();

}


const fakePatches = [

  "✅ Reduced player intelligence",

  "✅ Enemies now disrespect you",

  "✅ Fixed skill issue",

  "✅ Walls now magnetic",

  "✅ Jump timing made illegal"

];

notify(

  fakePatches[
    Math.floor(
      Math.random()
      * fakePatches.length
    )
  ]

);

setInterval(() => {

  if (boss.hp > player.hp) {

    addChatMessage(

      "ΩBOSS",

      "😭 this isn't even close"

    );

  }

}, 6000);

if (player.distance < 20) {

  notify(
    "🏁 almost there!"
  );

  setTimeout(() => {

    player.x = 0;

    notify(
      "😈 denied"
    );

  }, 1200);

}

if (deathCount >= 15) {

  document.body.style.filter =

    "hue-rotate(180deg)";

  notify(
    "☠ ΩMEGA is bored"
  );

}

setInterval(() => {

  document.title =

  [
    "😭 skill issue",
    "☠ you died again",
    "🎮 uninstall maybe?",
    "😈 ΩMEGA laughing"
  ][Math.floor(Math.random()*4)];

}, 3000);