/* =========================
   Ω AI ASSISTANT
========================= */

const OmegaAI = {

  responses: {

    hello:
    "👁 Hello, human.",

    hi:
    "⚡ Greetings lifeform.",

    help:
    "🧠 Available systems: games, terminal, settings.",

    games:
    "🎮 Dash Cube, Shadow Hunter, Laser Escape.",

    creator:
    "👁 Creator identity classified.",

    omega:
    "🌌 ΩMEGA sees everything.",

    rage:
    "😭 skill issue detected.",

    whoami:
    "🧬 unknown biological entity.",

    shutdown:
    "☠ denied."

  },

  init() {

    const panel =
    document.createElement("div");

    panel.id = "omegaAI";

    panel.innerHTML = `

      <div id="aiHeader">

        👁 Ω AI CORE

        <button id="closeAI">

          ✖

        </button>

      </div>

      <div id="aiMessages">

        <div class="ai-msg">

          Ω AI ONLINE

        </div>

      </div>

      <input
        id="aiInput"
        placeholder="
        ask ΩMEGA...
        "
      />

    `;

    document.body.appendChild(
      panel
    );

    this.bind();

  },

  bind() {

    const input =
    document.getElementById(
      "aiInput"
    );

    input.addEventListener(

      "keydown",

      (e) => {

        if (e.key !== "Enter")
        return;

        const text =
        input.value.trim()
        .toLowerCase();

        this.respond(text);

        input.value = "";

      }

    );

    document
    .getElementById(
      "closeAI"
    )
    .onclick = () => {

      document
      .getElementById(
        "omegaAI"
      )
      .classList.remove(
        "open"
      );

    };

  },

  respond(text) {

    const messages =
    document.getElementById(
      "aiMessages"
    );

    messages.innerHTML += `

      <div class="user-msg">

        ${text}

      </div>

    `;

    const reply =

      this.responses[text]

      ||

      "🤖 response unavailable.";

    setTimeout(() => {

      messages.innerHTML += `

        <div class="ai-msg">

          ${reply}

        </div>

      `;

      messages.scrollTop =
      messages.scrollHeight;

    }, 500);

  },

  open() {

    document
    .getElementById(
      "omegaAI"
    )
    .classList.add(
      "open"
    );

  }

};

window.addEventListener(

  "load",

  () => {

    OmegaAI.init();

  }

);