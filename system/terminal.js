/* =========================
   Ω TERMINAL SYSTEM
========================= */

const OmegaTerminal = {

  commands: {

    help: `

Available commands:

help
games
clear
omega
system
panic
whoami

`,

    omega:
    "👁 ΩMEGA IS ALWAYS WATCHING",

    system:
    "⚡ SYSTEM STATUS: CHAOTIC",

    whoami:
    "😭 unknown lifeform detected",

    panic:
    "🚨 PANIC MODE ACTIVATED"

  },

  init() {

    const terminal =
    document.createElement("div");

    terminal.id = "omegaTerminal";

    terminal.innerHTML = `

      <div id="terminalHeader">

        Ω TERMINAL

        <button id="closeTerminal">

          ✖

        </button>

      </div>

      <div id="terminalOutput">

        <p>

          ΩMEGA OS v3.0

        </p>

      </div>

      <input
        id="terminalInput"
        placeholder="
        enter command...
        "
      />

    `;

    document.body.appendChild(
      terminal
    );

    this.bind();

  },

  bind() {

    const input =

    document.getElementById(
      "terminalInput"
    );

    input.addEventListener(

      "keydown",

      (e) => {

        if (e.key !== "Enter")
        return;

        const cmd =
        input.value.trim();

        this.run(cmd);

        input.value = "";

      }

    );

    document
    .getElementById(
      "closeTerminal"
    )
    .onclick = () => {

      document
      .getElementById(
        "omegaTerminal"
      )
      .classList.remove(
        "open"
      );

    };

  },

  run(cmd) {

    const output =
    document.getElementById(
      "terminalOutput"
    );

    output.innerHTML += `

      <p>
        > ${cmd}
      </p>

    `;

    if (cmd === "clear") {

      output.innerHTML = "";

      return;

    }

    if (cmd === "games") {

      output.innerHTML += `

        <p>
          🎮 dash-cube
        </p>

        <p>
          ⚡ laser-escape
        </p>

        <p>
          👁 shadow-hunter
        </p>

      `;

      return;

    }

    const response =

      this.commands[cmd]

      ||

      "❌ unknown command";

    output.innerHTML += `

      <p>

        ${response}

      </p>

    `;

    output.scrollTop =
    output.scrollHeight;

  },

  open() {

    document
    .getElementById(
      "omegaTerminal"
    )
    .classList.add(
      "open"
    );

  }

};

window.addEventListener(

  "load",

  () => {

    OmegaTerminal.init();

  }

);