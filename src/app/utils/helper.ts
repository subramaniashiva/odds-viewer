export function getMaximum(objArray: Array<Object>, key:string) {
  return Math.max.apply(null, objArray.map((item) => item[key]));
}
