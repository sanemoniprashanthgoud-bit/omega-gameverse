/* =========================
   Ω BOOT SEQUENCE
========================= */

function bootSequence() {

  const boot =
  document.createElement("div");

  boot.id = "bootScreen";

  boot.innerHTML = `

    <div class="boot-logo">

      ΩMEGA OS

    </div>

    <div class="boot-text">

      Initializing systems...

    </div>

  `;

  document.body.appendChild(
    boot
  );

  const messages = [

    "Loading AI Core...",
    "Connecting multiverse...",
    "Starting chaos engine...",
    "Injecting rage systems...",
    "Calibrating ΩMEGA..."

  ];

  let i = 0;

  const interval = setInterval(() => {

    if (i >= messages.length) {

      clearInterval(interval);

      setTimeout(() => {

        boot.remove();

      }, 1000);

      return;

    }

    boot.querySelector(
      ".boot-text"
    ).textContent = messages[i];

    i++;

  }, 1200);

}

bootSequence();