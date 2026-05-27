/* =========================
   Ω WINDOW MANAGER
========================= */

const WindowManager = {

  z: 1000,

  create(title, content) {

    const win =
    document.createElement("div");

    win.className =
    "omega-window";

    win.style.left = "200px";
    win.style.top = "120px";

    win.style.zIndex =
    this.z++;

    win.innerHTML = `

      <div class="window-header">

        <span>

          ${title}

        </span>

        <div>

          <button class="min-btn">

            —

          </button>

          <button class="close-btn">

            ✖

          </button>

        </div>

      </div>

      <div class="window-content">

        ${content}

      </div>

    `;

    document.body.appendChild(
      win
    );

    this.drag(win);

    win.querySelector(
      ".close-btn"
    ).onclick = () => {

      win.remove();

    };

    win.onclick = () => {

      win.style.zIndex =
      this.z++;

    };

    return win;

  },

  drag(win) {

    const header =

    win.querySelector(
      ".window-header"
    );

    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    header.addEventListener(

      "mousedown",

      (e) => {

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

      (e) => {

        if (!dragging)
        return;

        win.style.left =

          e.clientX - offsetX
          + "px";

        win.style.top =

          e.clientY - offsetY
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

};