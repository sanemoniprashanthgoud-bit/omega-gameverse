export class World {

  constructor() {

    this.entities = [];

    this.systems = [];

  }

  addEntity(entity) {

    this.entities.push(entity);

  }

  addSystem(system) {

    this.systems.push(system);

  }

  update(delta) {

    this.systems.forEach(system => {

      system.update(
        this.entities,
        delta
      );

    });

  }

}