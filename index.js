
module.exports = function () {
  var classes = ''
  for (var i = 0, l = arguments.length; i < l; i++) {
    var item = arguments[i]
    if (item) classes += item + ' '
  }
  return classes.trim()
}
