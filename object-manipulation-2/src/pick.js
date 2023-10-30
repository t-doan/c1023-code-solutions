/* exported pick */
function pick(source, keys) {
  const object = {};
  for (const prop of keys) {
    const key = source[prop];
    if (key !== undefined) {
      object[prop] = source[prop];
    }
  }
  return object;
}
