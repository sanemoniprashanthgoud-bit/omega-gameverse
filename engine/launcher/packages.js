export class PackageManager {

  constructor() {

    this.packages = [];

  }

  install(pkg) {

    this.packages.push(pkg);

  }

}