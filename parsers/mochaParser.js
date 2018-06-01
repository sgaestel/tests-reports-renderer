const _ = require('lodash');
const { pathResolver } = require('../utils');

module.exports = config => {
  const report = require(pathResolver(config.path));

  const successTests = _.map(report.passes, test => ({
    ...test,
    status: 'success'
  }));
  const failureTests = _.map(report.failures, test => ({
    ...test,
    status: 'failure'
  }));

  return {
    type: 'mocha',
    counters: {
      total: report.stats.tests,
      success: report.stats.passes,
      failures: report.stats.failures
    },
    duration: report.stats.duration,
    links: config.links || [],
    results: _.chain(successTests)
      .merge(failureTests)
      .sortBy('title')
      .value()
  };
};
