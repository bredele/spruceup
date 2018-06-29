
/**
 * Concatenate any type of primitives with functions, arrays and/or objects
 * to create class names.
 *
 * Examples:
 *
 *  classes('hello', 'world')
 *  // => hello world
 *
 *  classes('hello', () => 'world')
 *  // => hello world
 *
 * @return {String}
 * @api public
 */

module.exports = function () {
  var classes = ''
  for (var i = 0, l = arguments.length; i < l; i++) {
    var item = arguments[i]
    var type = typeof item
    if (type === 'function') {
      item = item()
      type = typeof item
    }
    if (item && type !== 'boolean') {
      if (type === 'object') {
        if (item instanceof Array) item = item.filter(element => element && typeof element !== 'boolean').join(' ')
        else item = Object.keys(item).filter(element => item[element])
      }
      classes += item + ' '
    }
  }
  return classes.trim()
}
