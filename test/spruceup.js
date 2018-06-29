/**
 * Dependencie(s)
 */

const test = require('tape')
const classes = require('..')

test('should concatenate classes together', assert => {
  assert.plan(1)
  assert.equal(classes('hello', 'world'), 'hello world')
})
