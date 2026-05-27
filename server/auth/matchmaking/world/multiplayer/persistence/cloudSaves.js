export class CloudSave {

  save(player) {

    localStorage.setItem(

      "save_" + player.id,

      JSON.stringify(player)

    );

  }

  load(id) {

    return JSON.parse(

      localStorage.getItem(
        "save_" + id
      )

    );

  }

}