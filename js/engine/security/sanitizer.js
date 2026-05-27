/* =========================
   SANITIZER
========================= */

function sanitize(text) {

  return text

  .replace(/</g, "&lt;")

  .replace(/>/g, "&gt;")

  .replace(/script/gi, "");

}

username = sanitize(username);