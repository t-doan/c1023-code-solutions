/* exported pick */
function pick(source, keys) {
  const object = {};
  for (const key in source) {
    if (source[key] !== undefined) {
      object[key] = source[key];
    }
  }
  return object;
}
