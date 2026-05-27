/* =========================
   Ω TASKBAR
========================= */

const Taskbar = {

  init() {

    const bar =
    document.createElement("div");

    bar.id = "omegaTaskbar";

    bar.innerHTML = `

      <div class="task-left">

        <button id="omegaStart">

          Ω START

        </button>

      </div>

      <div class="task-center">

        ΩMEGA GAMEVERSE

      </div>

      <div class="task-right">

        <span id="clock">

          00:00

        </span>

      </div>

    `;

    document.body.appendChild(
      bar
    );

    this.startClock();

  },

  startClock() {

    setInterval(() => {

      const now =
      new Date();

      const time =

        now.toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        );

      document.getElementById(
        "clock"
      ).textContent = time;

    }, 1000);

  }

};

Taskbar.init();