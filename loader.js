module.exports =
  function(content) {
    return function(config) {
      function normal(template, ...expressions) {
        return template.reduce((accumulator, part, i) => {
          return accumulator + expressions[i - 1] + part
        })
      }
      var config = config || {};
      var scope = config.scope || {};
      var tag = config.tag || normal;
      var keys = Object.keys(scope).join(',');
      keys = keys.length ? ',' + keys : '';
      var tagFunc = new Function('tag' + keys, 'return ' + content);
      return config.scope ? tagFunc(tag, ...Object.values(scope)) : tagFunc.apply(this, [tag]);
    }
  }