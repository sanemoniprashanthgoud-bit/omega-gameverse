/* =========================
   Ω START MENU
========================= */

const StartMenu = {

  init() {

    const menu =
    document.createElement("div");

    menu.id = "startMenu";

    menu.innerHTML = `

document
.getElementById(
  "openTerminal"
)
.onclick = () => {

  OmegaTerminal.open();

};

      <div class="start-item">

        🎮 Games

      </div>

      <div class="start-item">

        ⚙ Settings

      </div>

      <div
  class="start-item"
  id="openTerminal"
>

  💻 Terminal

</div>

      <div class="start-item">

        👁 Ω AI Core

      </div>

    `;

    document.body.appendChild(
      menu
    );

    document
    .getElementById(
      "omegaStart"
    )
    .addEventListener(

      "click",

      () => {

        menu.classList.toggle(
          "open"
        );

      }

    );

  }

};

window.addEventListener(

  "load",

  () => {

    StartMenu.init();

  }

);

document
.querySelectorAll(
  ".start-item"
)
.forEach(item => {

  item.addEventListener(

    "click",

    () => {

      const name =
      item.textContent.trim();

      WindowManager.create(

        name,

        `

        <h2>

          ${name}

        </h2>

        <p>

          ΩMEGA application loaded 😭🔥

        </p>

        `

      );

    }

  );

});