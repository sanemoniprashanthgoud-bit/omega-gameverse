export class JobSystem {

  constructor() {

    this.jobs = [];

  }

  add(job) {

    this.jobs.push(job);

  }

  run() {

    this.jobs.forEach(
      job => job()
    );

    this.jobs = [];

  }

}