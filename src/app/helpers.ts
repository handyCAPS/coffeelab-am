export const hasOwn = (object: Object, key: string): boolean => {
  return Object.prototype.hasOwnProperty.call(object, key);
};
