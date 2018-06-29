
module.exports = function () {
  var classes = ''
  for (var i = 0, l = arguments.length; i < l; i++) {
    var item = arguments[i]
    var type = typeof item
    if (item && type !== 'boolean') classes += item + ' '
  }
  return classes.trim()
}
