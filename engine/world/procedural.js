export function generateMap() {

  const map = [];

  for (let y = 0; y < 50; y++) {

    const row = [];

    for (let x = 0; x < 50; x++) {

      row.push(
        Math.random() > 0.8
        ? 1
        : 0
      );

    }

    map.push(row);

  }

  return map;

}