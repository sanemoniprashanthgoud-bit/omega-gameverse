export class Inventory {

  constructor() {

    this.items = [];

    this.gold = 0;

  }

  addItem(item) {

    this.items.push(item);

    console.log(
      `${item} added`
    );

  }

  removeItem(item) {

    this.items =
    this.items.filter(

      i => i !== item

    );

  }

  addGold(amount) {

    this.gold += amount;

  }

}