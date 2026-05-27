export class ChatChannel {

  constructor(name) {

    this.name = name;

    this.messages = [];

  }

  send(player, text) {

    this.messages.push({

      player,
      text,

      time:
      Date.now()

    });

  }

}