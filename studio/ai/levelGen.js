export class LevelGenerator {

  generate() {

    return {

      enemies:
      Math.floor(
        Math.random() * 20
      ),

      loot:
      Math.floor(
        Math.random() * 10
      )

    };

  }

}