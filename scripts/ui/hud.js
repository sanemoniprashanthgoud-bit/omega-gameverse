export function drawHUD(
  ctx,
  score,
  fps
) {

  ctx.fillStyle = "white";

  ctx.font =
  "20px Arial";

  ctx.fillText(
    `Score: ${score}`,
    20,
    40
  );

  ctx.fillText(
    `FPS: ${fps}`,
    20,
    70
  );

}