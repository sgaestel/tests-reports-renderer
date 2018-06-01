const _ = require('lodash');
const projectPath = process.cwd();

module.exports = {
  pathResolver: path => {
    if (_.startsWith(path, '.')) {
      return `${projectPath}/${path}`;
    }
    return path;
  }
};
