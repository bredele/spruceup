
module.exports = function () {
  var classes = ''
  for (var i = 0, l = arguments.length; i < l; i++) {
    classes += arguments[i] + ' '
  }
  return classes.trim()
}
