const fs = require('fs');
const _ = require('lodash');
const parsers = require('./parsers');

const projectPath = process.cwd();

const pathResolver = path => {
  if (_.startsWith(path, '.')) {
    return `${projectPath}/${path}`;
  }
  return path;
};

module.exports = {
  run: () => {
    const outputPath = `${projectPath}/test-reports-renderer-output`;
    const config = require(`${projectPath}/package.json`)['test-reports-renderer'];

    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath);
    }

    const results = _.map(config.results, result => parsers[result.type](result));
    const result = {
      counters: _.reduce(
        results,
        (counters, res) => {
          _.forEach(['total', 'success', 'failures'], status => {
            counters[status] += res.counters[status];
          });
          return counters;
        },
        { total: 0, success: 0, failures: 0 }
      ),
      results
    };

    fs.writeFileSync(`${outputPath}/result.json`, JSON.stringify(result));
  }
};
