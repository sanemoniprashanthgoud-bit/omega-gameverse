/* =========================
   Ω TROLL SYSTEM
========================= */

const TrollSystem = {

  enabled: true,

  fakeCrash() {

    if (!this.enabled) return;

    document.body.innerHTML = `

      <div
        style="

        position:fixed;
        inset:0;

        background:black;

        color:red;

        display:flex;

        align-items:center;
        justify-content:center;

        font-size:42px;

        z-index:999999999;

        "

      >

        SYSTEM FAILURE

      </div>

    `;

    setTimeout(() => {

      location.reload();

    }, 2500);

  },

  /* =========================
     FAKE DELETE SAVE
  ========================= */

  fakeDeleteSave() {

    notify(
      "🗑 SAVE DATA DELETED"
    );

    setTimeout(() => {

      notify(
        "😈 just kidding"
      );

    }, 2000);

  },

  /* =========================
     RANDOM SCREEN SHAKE
  ========================= */

  randomShake() {

    Camera.shake(

      Math.random() * 20

    );

  },

  /* =========================
     FAKE LAG
  ========================= */

  fakeLag() {

    document.body.style.filter =

      "blur(4px)";

    setTimeout(() => {

      document.body.style.filter =

        "none";

    }, 1500);

  },

  /* =========================
     BUTTON ESCAPE
  ========================= */

  buttonEscape(button) {

    button.addEventListener(

      "mouseenter",

      () => {

        button.style.transform =

        `translate(

          ${Math.random()*120-60}px,

          ${Math.random()*120-60}px

        )`;

      }

    );

  },

  /* =========================
     FAKE VIRUS
  ========================= */

  fakeVirusPopup() {

    const popup =
    document.createElement("div");

    popup.innerHTML = `

      ⚠ ΩVIRUS DETECTED

    `;

    popup.style.cssText = `

      position:fixed;

      top:${Math.random()*80}%;

      left:${Math.random()*80}%;

      background:red;

      color:white;

      padding:20px;

      z-index:99999999;

      border-radius:20px;

    `;

    document.body.appendChild(
      popup
    );

    setTimeout(() => {

      popup.remove();

    }, 3000);

  },

  /* =========================
     CONTROLS SWAP
  ========================= */

  reverseControls() {

    this.reversed = true;

    notify(
      "😈 controls reversed"
    );

    setTimeout(() => {

      this.reversed = false;

      notify(
        "😇 controls restored"
      );

    }, 10000);

  }

};