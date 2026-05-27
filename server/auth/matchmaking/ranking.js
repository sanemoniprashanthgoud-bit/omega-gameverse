export class Leaderboard {

  constructor() {

    this.scores = [];

  }

  add(name, score) {

    this.scores.push({
      name,
      score
    });

    this.scores.sort(

      (a, b) =>
      b.score - a.score

    );

  }

}