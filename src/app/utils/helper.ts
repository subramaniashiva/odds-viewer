/**
 * Gets the maximum from an array of objects with the given key.
 * @param {Array} objArray - Array of objects.
 * @return {number} returns the maximum number.
 */
export function getMaximum(objArray: Array<Object>, key:string):number {
  return Math.max.apply(null, objArray.map((item) => item[key]));
}
