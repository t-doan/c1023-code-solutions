/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNull = [];
  let value;
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      value = values[i];
      noNull.push(value);
      // values.splice(i,1,);
    }
  }
  return noNull;
}
