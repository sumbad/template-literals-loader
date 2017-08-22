<div align="center">
    <h1>Template literals loader</h1>
</div>

The `template-literals-loader` is a module for webpack to use [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as HTML template from a separate file.

## Installation

`npm install template-literals-loader -D`

## Usage



If you want to use this module with new browsers you can just setting webpack. If you will use it with old ES5 only support browsers you have to include babel loader or some other ES2015 loader that supports template strings.

**webpack.config.js**  for ES5 support
``` javascript
...
{
    test: /\.js.html?$/,
    use: [
        {
            loader: 'babel-loader'
        },
        {
            loader: 'template-literals-loader'
        },
    ]
},
...
};
```

**webpack.config.js** for ES2015 and later support
``` javascript
...
{
    test: /\.js.html?$/,
    use: [
        {
            loader: 'template-literals-loader'
        },
    ]
},
...
};
```

**template.js.html**
``` html
<h1>Hello, ${name}</h1>
```

**main.js**  with tagged template literals
``` javascript
let template = require('./template.js.html');

function myTag(chunks, ...interpolations) {
  console.log(chunks);
  console.log(interpolations);
}

template({name: 'world'}, myTag);
```

**main.js**  without tagged template literals
``` javascript
let template = require('./template.js.html');

function myTag(chunks, ...interpolations) {
  console.log(chunks);
  console.log(interpolations);
}

console.log(template({name: 'world'}));
```