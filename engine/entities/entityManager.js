export class EntityManager {

  constructor() {

    this.entities = [];

  }

  add(entity) {

    this.entities.push(entity);

  }

  update() {

    this.entities.forEach(
      entity => entity.update()
    );

  }

  draw(ctx) {

    this.entities.forEach(
      entity => entity.draw(ctx)
    );

  }

}