import _ from 'lodash';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class Counters extends Component {
  render() {
    return _.reduce(
      this.props.counters,
      (memo, counterValue, counterName) => {
        const elem = (
          <span>
            {_.capitalize(counterName)}: <b>{counterValue}</b>
          </span>
        );
        if (_.isEmpty(memo)) {
          memo.push(elem);
        } else {
          memo.push(' - ', elem);
        }

        return memo;
      },
      []
    );
  }
}
