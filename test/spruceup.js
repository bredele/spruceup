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

test('should concatenate result of a function', assert => {
  assert.plan(1)
  assert.equal(classes('hello', () => 'world'), 'hello world')
})

test('should not concatenate result of a function is falsy or truty boolean', assert => {
  assert.plan(2)
  assert.equal(classes('hello', () => {}), 'hello')
  assert.equal(classes('hello', () => true), 'hello')
})

test('should concatenate classes with arrays', assert => {
  assert.plan(1)
  assert.equal(classes('hello', ['world', 'and', 'universe']), 'hello world and universe')
})

test('should concatenate classes with arrays elements that are not booleans or falsy', assert => {
  assert.plan(1)
  assert.equal(classes('hello', ['world', null, true, 'and', 'universe']), 'hello world and universe')
})

test('should concatenate objects properties if truthy', assert => {
  assert.plan(1)
  assert.equal(classes('hello', {world: true}), 'hello world')
})

test('should concatenate classes made of objects, arrays and/or functions', assert => {
  assert.plan(1)
  assert.equal(classes('hello', () => 'world', null, 0, {and: true, universe: false}, 'universe'), 'hello world and universe')
})
