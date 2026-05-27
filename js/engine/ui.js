export function updateHealthBar(
  player
) {

  const bar =
  document.getElementById(
    "healthFill"
  );

  bar.style.width =

  `${

    (player.health /
    player.maxHealth)

    * 100

  }%`;

}