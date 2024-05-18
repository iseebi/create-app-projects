const path = require('path');

module.exports = {
  params: ({ args, h }) => {
    const dirname = path.dirname(args.name);
    const componentName = path.basename(args.name);
    const backwardDir = (() => {
      if (dirname === '.') {
        return '../';
      }
      return dirname.split('/').map(() => '../').join('') + '../';
    })();
    return {
      name: args.name,
      dir: dirname === '.' ? '' : dirname + '/',
      backwardDir: backwardDir,
      componentName: h.changeCase.pascalCase(componentName),
    };
  },
};
