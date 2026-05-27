export class Guild {

  constructor(name) {

    this.name = name;

    this.members = [];

  }

  add(player) {

    this.members.push(player);

  }

}