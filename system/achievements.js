/* =========================
   Ω ACHIEVEMENT SYSTEM
========================= */

const Achievements = {

  unlocked: [],

  unlock(name, desc) {

    if (
      this.unlocked.includes(name)
    ) return;

    this.unlocked.push(name);

    const popup =
    document.createElement("div");

    popup.className =
    "achievement-popup";

    popup.innerHTML = `

      <div class="ach-title">

        🏆 ACHIEVEMENT UNLOCKED

      </div>

      <div class="ach-name">

        ${name}

      </div>

      <div class="ach-desc">

        ${desc}

      </div>

    `;

    document.body.appendChild(
      popup
    );

    setTimeout(() => {

      popup.classList.add(
        "show"
      );

    }, 100);

    setTimeout(() => {

      popup.classList.remove(
        "show"
      );

      setTimeout(() => {

        popup.remove();

      }, 500);

    }, 4000);

  }

};