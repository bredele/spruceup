# Spruce up

[![Build Status](https://travis-ci.org/bredele/spruceup.svg?branch=master)](https://travis-ci.org/bredele/spruceup)
[![NPM](https://img.shields.io/npm/v/spruceup.svg)](https://www.npmjs.com/package/spruceup)
[![Downloads](https://img.shields.io/npm/dm/spruceup.svg)](http://npm-stat.com/charts.html?package=spruceup)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/guidelines.md)

Spruce up is a simple JavaScript function for conditionally and elegantly concatenate CSS classes. Spruce up supports:
* **Primitives**: Returns a string that is the result of joining all primitives passed to the the function. Booleans and falsy values are exempted!
* **Arrays**: Evaluate and join all elements of an array as classes.
* **Functions**: Evaluate functions and concatenate their output as a class name.
* **Objects**: Objects are looped through and used to conditionally add classes.

Spruce up is particularly useful with [React](https://reactjs.org/) and support all main stream browsers.

## Usage

```js
import classes from 'spruceup'

classes('hello', 'world')
// => 'hello world'

classes('hello', () => 'world')
// => 'hello world'

classes('hello', null, 0, '', 'world')
// => 'hello world'

classes('hello', ['world', null, 'and', 0], 'universe')
// => 'hello world and universe'

classes('hello', {
  world: false,
  universe: true
})
// => hello universe
```

Here's a simple example using a React component.

```js
import classes from 'spruceup'

function Button (props) {
  const {label, ...styles} = props
  return ('
    <button className={classes('button', styles, ['primary', 'btn'])}></button>
  )
}
```

## Installation

```shell
npm install spruceup --save
```

[![NPM](https://nodei.co/npm/spruceup.png)](https://nodei.co/npm/spruceup/)


## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

This is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/guidelines.md" target="_blank">guideline</a> before making a pull request. If you have any spruceup related project, component or other let everyone know in our wiki.

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
