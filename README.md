# :hocho: Strops (String Operations)

[![npm version](https://badge.fury.io/js/strops.svg)](https://badge.fury.io/js/strops)
[![Known Vulnerabilities](https://snyk.io/test/github//wellloy1/strops-js/badge.svg)](https://snyk.io/test/github/wellloy1/strops-js)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fwellloy1%2Fstrops-js.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fwellloy1%2Fstrops-js?ref=badge_shield)

<p>Provides simple methods for the most useful operations with substrings:<br/>
- remove, replace, get from A to B, get from A to B exclusive and other.
<br/>For an example, you can use it for an HTML page repairing or restyling old websites:<br/>
- replacing CSS styles, appending blocks into html, deleting specific tags with inners, and etc.</p>

<p>Of course, these methods cannot give you total control as RegExp.
But in many cases it can be more easy and efficient.
<br/>This package has zero dependencies.</p>

<p>:wink: Hope you enjoy it!</p>

## :pushpin: Installation

```bash
$ npm i strops
```

```js
// CommonJS
const strops = require('strops')
// or:
const { replace, remove } = require('strops')

// ESM
import * as strops from 'strops'
// or:
import { replace, remove } from 'strops'
```

## :zap: Methods

| Method                | Description                                                                                            | Params                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| `remove`              | Removes all substrings and returns `<string>`                                                          | `<string, ...substrings>`               |
| `replace`             | Replaces all substrings with new substring and returns `<string>`                                      | `<string, newSubstring, ...substrings>` |
| `getAtoB`             | Returns all substrings from A to B as an `<array>` of `<string>`                                       | `<string, a, b>`    |
| `getAtoBInner`        | Returns all substrings from A to B as an `<array>` of `<string>` exclusive                             | `<string, a, b>`    |
| `removeAtoB`          | Removes all substrings from A to B as a `<string>`                                                     | `<string, a, b>`    |
| `removeAtoBInner`     | Removes all substrings from A to B as a `<string>` exclusive                                           | `<string, a, b>`    |
| `getIndexes`          | Returns index pairs for all substrings as a `{startIndex: endIndex, ...}`                       | `<string, ...substrings>`               |
| `getIndexesAtoB`      | Returns index pairs for all substrings from A to B as a `{startIndex: endIndex, ...}`           | `<string, a, a>`    |
| `getIndexesAtoBInner` | Returns index pairs for all substrings from A to B as a `{startIndex: endIndex, ...}` exclusive | `<string, a, b>`    |

## :heart_eyes: Pretty tooltips in your IDE
![Alt-текст](https://pbs.twimg.com/media/FZfFax9UEAAuJ0A?format=png "Screenshot_2")

## :blue_book: Usage

### Common snippet for examples below:

```js
const strops = require('strops')

const text = `<table>
<tr><td class="class-1"><b>JavaScript</b></td></tr>
<tr><td class="class-2">C++</td></tr>
<tr><td class="class-1">Python</td></tr>
</table>`
```

### remove:

```js
const newText = strops.remove(text, '<b>', '</b>', 'class-1')

// returns:
// <table>
// <tr><td class="">JavaScript</td></tr>
// <tr><td class="class-2">C++</td></tr>
// <tr><td class="">Python</td></tr>
// </table>

// Also you can pass an array of substrings to get the same result
// Just use the spread operator to expand the array out to the parameters
const newText = strops.remove(text, ...['<b>', '</b>', 'class-1'])
```

### removeAtoB:

```js
const newText = strops.removeAtoB(text, '<tr>', '</tr>')

// returns:
// <table>
//
//
//
// </table>
```

### removeAtoBInner:

```js
const newText = strops.removeAtoBInner(text, '<tr>', '</tr>')

// returns:
// <table>
// <tr></tr>
// <tr></tr>
// <tr></tr>
// </table>
```

### replace:

```js
const newText = strops.replace(text, 'Rust', 'Python', 'C++', 'JavaScript')

// returns:
// <table>
// <tr><td class="class-1"><b>Rust</b></td></tr>
// <tr><td class="class-2">Rust</td></tr>
// <tr><td class="class-1">Rust</td></tr>
// </table>
```

### getAtoB:

```js
const newText = strops.getAtoB(text, '<tr>', '</tr>')

// returns:
// [
//  '<tr><td class="class-1"><b>JavaScript</b></td></tr>',
//  '<tr><td class="class-2">C++</td></tr>',
//  '<tr><td class="class-1">Python</td></tr>'
// ]

// You can easily get first entry by:

const newText = strops.getAtoB(text, '<tr>', '</tr>')[0]

// returns:
// <tr><td class="class-1"><b>JavaScript</b></td></tr>
```

### getAtoBInner:

```js
const newText = strops.getAtoBInner(text, '<tr>', '</tr>')

// returns:
// [
//  '<td class="class-1"><b>JavaScript</b></td>',
//  '<td class="class-2">C++</td>',
//  '<td class="class-1">Python</td>'
// ]
```

### getIndexes:

```js
const newText = strops.getIndexes(text, '<tr>')

// returns:
// { '8': 12, '60': 64, '99': 103 }
// * where <key> is start index, and <value> is an end index

// And yes. I know that we have <key> as a type of <string> here.
// But this approach simple to use when you get slices by iterating this:
const word = 'Hey bro!'
const indexes = { 0: 3, 4: 7 }

for (let key in indexes) {
	console.log(word.substring(key, indexes[key]))
}
// Hey
// bro
```

### getIndexesAtoBInner:

```js
const newText = strops.getIndexesAtoBInner(text, '<tr>', '</tr>')

// returns:
// { '12': 54, '64': 93, '103': 134 }
// * where <key> is start index, and <value> is an end index
```

### getIndexesAtoB:

```js
const newText = strops.getIndexesAtoB(text, '<tr>', '</tr>')

// returns:
// { '8': 59, '60': 98, '99': 139 }
// * where <key> is start index, and <value> is an end index
```

## :dart: Coming soon:

- Tests
- Methods with a simple conditions/RegExp integration
- Specific methods for an HTML tags

## License

Copyright (c) 2022 [Max Shane](https://github.com/wellloy1).
Strops is [MIT licensed](./LICENSE).
