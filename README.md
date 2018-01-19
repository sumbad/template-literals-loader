<div align="center">
    <h1>Template literals loader</h1>
</div>

The `template-literals-loader` is a module for webpack to use [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as HTML template from a separate file.

This plugin adds a wrapper to a template file and returns it as a function.

## Installation

`npm install template-literals-loader -D`

## Usage



If you want to use this module with new browsers you can just setting webpack.

**webpack.config.js**
``` javascript
...
{
    test: /\.html?$/,
    loader: "template-literals-loader"
},
...
```

## Examples


**template.html**
``` html
<h1>Hello, ${name}</h1>
```

**main.js**  with tagged template literals
``` javascript
const template = require('./template.html');

function myTagFunc(chunks, ...interpolations) {
  console.log(chunks);
  console.log(interpolations);
}

const config = { 
  scope: {name: 'world'}, // optional
  tag: myTagFunc          // optional
};

template(config);
```

The result:

``` javascript
// ["<h1>Hello, ", "</h1>", raw: ["<h1>Hello, ", "</h1>"]]
// ["world"]
```


**main.js**  without tagged template literals
``` javascript
const template = require('./template.html');

const config = { 
  scope: {name: 'world'}, 
};
console.log(template(config));
```

The result:

``` javascript
// <h1>Hello, world</h1>
```

You can set a config or not. If you don't use the config.scope it will use current [[Scope]]. I.e. in a tepmplate you will have to write `<h1>Hello, ${this.name}</h1>` and set  the `name` variable in your code.


Usage with a class:

**template.html**
``` html
<h1>Hello, ${this.name}</h1>
```

**main.js** 
``` javascript
const template = require('./template.html');

class Hello {
  name = 'Den!';
  _template;

  constructor() {
    this._template = template;

    console.log(this._template()); //<h1>Hello, Den!</h1>
  }
}
```