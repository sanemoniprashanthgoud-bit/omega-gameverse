export class Inventory {

  constructor() {

    this.items = [];

  }

  add(item) {

    this.items.push(item);

  }

  remove(name) {

    this.items =
    this.items.filter(
      item => item.name !== name
    );

  }

}