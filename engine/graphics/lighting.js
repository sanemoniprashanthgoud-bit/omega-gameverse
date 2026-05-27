export function drawLight(
  ctx,
  x,
  y,
  radius,
  color
) {

  const gradient =
  ctx.createRadialGradient(
    x,
    y,
    0,
    x,
    y,
    radius
  );

  gradient.addColorStop(
    0,
    color
  );

  gradient.addColorStop(
    1,
    "transparent"
  );

  ctx.fillStyle =
  gradient;

  ctx.beginPath();

  ctx.arc(
    x,
    y,
    radius,
    0,
    Math.PI * 2
  );

  ctx.fill();

}