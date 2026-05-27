export function interpolate(

  current,
  target,
  alpha

) {

  return current +

  (target - current)
  * alpha;

}