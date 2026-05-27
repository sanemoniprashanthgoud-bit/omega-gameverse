export class SyncManager {

  constructor() {

    this.snapshots = [];

  }

  add(snapshot) {

    this.snapshots.push(snapshot);

  }

}