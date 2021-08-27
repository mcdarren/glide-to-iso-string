
window.function = function (datestring) {
  if (datestring.value === undefined) return undefined;
  
  var date = new Date(datestring.value);
  try {
    var iso_string = date.toISOString().replace(/-/g,"").slice(0,-5);
    return iso_string;
  }
  catch (err) {
    return undefined;
  }
}
