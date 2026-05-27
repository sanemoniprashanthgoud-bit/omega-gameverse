export function attackEnemy(
  player,
  enemy
) {

  enemy.hp -= player.damage;

  console.log(

    `You hit ${enemy.name}`

  );

  if (enemy.hp <= 0) {

    console.log(

      `${enemy.name} defeated`

    );

    player.gainXP(50);

  }

}