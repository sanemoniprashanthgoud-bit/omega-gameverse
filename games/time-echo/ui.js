function showMessage(text) {

  const msg =
  document.createElement("div");

  msg.className = "floating-msg";

  msg.innerText = text;

  document.body.appendChild(msg);

  setTimeout(() => {

    msg.remove();

  }, 2000);

}