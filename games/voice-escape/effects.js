function screenFlash() {

  const flash =
  document.createElement("div");

  flash.style.position = "fixed";

  flash.style.inset = 0;

  flash.style.background = "white";

  flash.style.opacity = "0.7";

  flash.style.pointerEvents = "none";

  flash.style.zIndex = 999;

  document.body.appendChild(flash);

  setTimeout(() => {

    flash.remove();

  }, 100);

}