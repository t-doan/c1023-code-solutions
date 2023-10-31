/* exported omit */
function omit(source, keys) {
  const object = {};
  for (const prop of keys) {
    const key = source[prop];
    if (key !== undefined) {
      object[prop] = source[prop];
    }
  }
  return object;

  /* use a for-in loop for source[key]
  conditional using array(keys).includes(key) */
}
