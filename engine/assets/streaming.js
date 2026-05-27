export class Streamer {

  async load(src) {

    const response =
    await fetch(src);

    return await response.blob();

  }

}