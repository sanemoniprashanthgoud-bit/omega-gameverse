/* =========================
   Ω PROFILE PANEL
========================= */

const ProfileUI = {

  open() {

    WindowManager.create(

      "👤 Profile",

      `

      <div class="profile-panel">

        <h2>

          ${OmegaSave.data.username}

        </h2>

        <p>

          🎖 Level:
          ${OmegaSave.data.level}

        </p>

        <p>

          ⚡ XP:
          ${OmegaSave.data.xp}/100

        </p>

        <p>

          🏆 Achievements:
          ${OmegaSave.data.achievements.length}

        </p>

        <button
          onclick="OmegaSave.reset()"
        >

          RESET SAVE

        </button>

      </div>

      `

    );

  }

};