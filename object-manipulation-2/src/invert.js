/* exported invert */
function invert(source) {
  const propHold = {};
  for (const prop in source) {
    propHold[source[prop]] = prop;
  }
  return propHold;
}
