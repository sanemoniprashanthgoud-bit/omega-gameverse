class AudioManager {

  static play(src, volume = 0.5) {

    const audio =
    new Audio(src);

    audio.volume = volume;

    audio.play();

  }

}