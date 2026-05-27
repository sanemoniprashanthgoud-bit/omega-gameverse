export class Quest {

  constructor(title, reward) {

    this.title = title;

    this.reward = reward;

    this.completed = false;

  }

  complete() {

    this.completed = true;

    console.log(
      "Quest Complete"
    );

  }

}