export function saveGame(data) {

  localStorage.setItem(

    "game_save",

    JSON.stringify(data)

  );

}

export function loadGame() {

  return JSON.parse(

    localStorage.getItem(
      "game_save"
    )

  );

}

const SaveSystem = {

  save(key, data) {

    localStorage.setItem(

      key,

      JSON.stringify(data)

    );

  },

  load(key) {

    return JSON.parse(

      localStorage.getItem(key)

    );

  }

};

/* =========================
   SECURE SAVE
========================= */

const SecureSave = {

  save(key, data) {

    const encoded = btoa(

      JSON.stringify(data)

    );

    localStorage.setItem(
      key,
      encoded
    );

  },

  load(key) {

    const data =

    localStorage.getItem(key);

    if (!data) return null;

    return JSON.parse(

      atob(data)

    );

  }

};