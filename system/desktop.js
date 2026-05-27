/* =========================
   Ω DESKTOP SYSTEM
========================= */

const Desktop = {

  apps: [

    {
      name: "Dash Cube",
      icon: "🎮"
    },

    {
      name: "Laser Escape",
      icon: "⚡"
    },

    {
      name: "Ω Terminal",
      icon: "💻"
    }

  ],

  init() {

    const desktop =

    document.createElement("div");

    desktop.id = "desktop";

    this.apps.forEach(app => {

      const icon =

      document.createElement("div");

      icon.className =
      "desktop-icon";

      icon.innerHTML = `

        <div class="icon">

          ${app.icon}

        </div>

        <span>

          ${app.name}

        </span>

      `;

      desktop.appendChild(icon);

    });

    document.body.appendChild(
      desktop
    );

  }

};

Desktop.init();