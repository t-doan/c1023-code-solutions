/* exported omit */
function omit(source, keys) {
  const object = {};
  for (const key in source) {
    if (keys.includes(key) === false) {
      object[key] = source[key];
    }
  }
  return object;
}
/* use a for-in loop for source[key]
  conditional using array(keys).includes(key) */
