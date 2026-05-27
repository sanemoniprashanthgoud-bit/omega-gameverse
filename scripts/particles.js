const body = document.body;

for (let i = 0; i < 50; i++) {

  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";

  particle.style.animationDuration =
  5 + Math.random() * 10 + "s";

  particle.style.opacity = Math.random();

  body.appendChild(particle);

}