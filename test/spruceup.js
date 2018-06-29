/**
 * Dependencie(s)
 */

const test = require('tape')
const classes = require('..')

test('should concatenate classes together', assert => {
  assert.plan(1)
  assert.equal(classes('hello', 'world'), 'hello world')
})

test('should only concatenate truthy values', assert => {
  assert.plan(1)
  assert.equal(classes('hello', null, false, 'world'), 'hello world')
})

test('should not concatenate values with truthy boolean', assert => {
  assert.plan(1)
  assert.equal(classes('hello', true, 'world'), 'hello world')
})
