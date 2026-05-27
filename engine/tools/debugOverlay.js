export function drawDebug(
  ctx,
  fps,
  entities
) {

  ctx.fillStyle =
  "lime";

  ctx.font =
  "16px monospace";

  ctx.fillText(
    `FPS: ${fps}`,
    20,
    20
  );

  ctx.fillText(
    `Entities: ${entities}`,
    20,
    40
  );

}