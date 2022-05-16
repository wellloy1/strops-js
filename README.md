# :hocho: Strops (String Operations)

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

### Node.js
```js
const str = require('strops')
// or you can import just the methods you need:
const { replace, remove } = require('strops')
```

## :zap: Methods

| Method | Description | Params |
|----------------|-------------------------|---------------------------------------|
| `remove` | Removes all substrings and returns `<string>` | `<string, ...substrings>` |
| `replace` | Replaces all substrings with new substring and returns `<string>` | `<string, newSubstring, ...substrings>` |
| `getAtoB` | Returns all substrings from A to B as an `<array>` of `<string>` | `<string, substring_A, substring_B>` |
| `getAtoBInner` | Returns all substrings from A to B as an `<array>` of `<string>` exclusive | `<string, substring_A, substring_B>` |
| `removeAtoB` | Removes all substrings from A to B as a `<string>`| `<string, substring_A, substring_B>` |
| `removeAtoBInner` | Removes all substrings from A to B as a `<string>` exclusive | `<string, substring_A, substring_B>` |
| `getIndexes` | Returns index pairs for all substrings as a `<key: startIndex, value: endIndex>` | `<string, ...substrings>` |
| `getIndexesAtoB` | Returns index pairs for all substrings from A to B  as a `<key: startIndex, value: endIndex>` | `<string, substring_A, substring_B>` |
| `getIndexesAtoBInner` | Returns index pairs for all substrings from A to B  as a `<key: startIndex, value: endIndex>` exclusive | `<string, substring_A, substring_B>` |


## :blue_book: Usage

### Common snippet for examples below:
```js
const str = require('strops')

const text = `<table>
<tr><td class="class-1"><b>JavaScript</b></td></tr>
<tr><td class="class-2">Java</td></tr>
<tr><td class="class-1">Python</td></tr>
</table>`
```

### remove:
```js
const newText = str.remove(text, '<b>', '</b>', 'class-1')

// returns:
// <table>
// <tr><td class="">JavaScript</td></tr>
// <tr><td class="class-2">Java</td></tr>
// <tr><td class="">Python</td></tr>
// </table>

// Also you can pass an array of substrings to get the same result
// Just use the spread operator to expand the array out to the parameters
const newText = str.remove(text, ...['<b>', '</b>', 'class-1'])
```

### replace:
```js
const newText = str.replace(text, 'Rust', 'Python')

// returns:
// <table>
// <tr><td class="class-1"><b>JavaScript</b></td></tr>
// <tr><td class="class-2">Java</td></tr>
// <tr><td class="class-1">Rust</td></tr>
// </table>
```

### getAtoB:
```js
const newText = str.getAtoB(text, '<tr>', '</tr>')

// returns:
// [
//  '<tr><td class="class-1"><b>JavaScript</b></td></tr>',
//  '<tr><td class="class-2">Java</td></tr>',
//  '<tr><td class="class-1">Python</td></tr>'
// ]

// You can easily get first entry by:

const newText = str.getAtoB(text, '<tr>', '</tr>')[0]

// returns:
// <tr><td class="class-1"><b>JavaScript</b></td></tr>
```

### getAtoBInner:
```js
const newText = str.getAtoBInner(text, '<tr>', '</tr>')

// returns:
// [
//  '<td class="class-1"><b>JavaScript</b></td>',
//  '<td class="class-2">Java</td>',
//  '<td class="class-1">Python</td>'
// ]
```

### getIndexes:
```js
const newText = str.getIndexes(text, '<tr>')

// returns:
// { '8': 12, '60': 64, '99': 103 }
// * where <key> is start index, and <value> is an end index

// And yes. I know that we have <key> as a type of <string> here. 
// But this approach simple to use when you get slices by iterating this:
const word = "Hey bro!"
const indexes = { '0': 3, '4':7 }

for (let key in indexes) {
    console.log(word.substring(key, indexes[key]))
}
// Hey
// bro
```

### getIndexesAtoBInner:
```js
const newText = str.getIndexesAtoBInner(text, '<tr>', '</tr>')

// returns:
// { '12': 54, '64': 93, '103': 134 }
// * where <key> is start index, and <value> is an end index
```

### getIndexesAtoB:
```js
const newText = str.getIndexesAtoB(text, '<tr>', '</tr>')

// returns:
// { '8': 59, '60': 98, '99': 139 }
// * where <key> is start index, and <value> is an end index
```

## :dart: Coming soon:

- Tests
- Typings
- Methods with a simple conditions/RegExp integration
- Specific methods for an HTML tags

## License
Copyright (c) 2022 [Max Shane](https://github.com/wellloy1).
Strops is [MIT licensed](./LICENSE).
