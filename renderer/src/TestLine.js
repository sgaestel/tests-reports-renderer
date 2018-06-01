import _ from 'lodash';
import React, { Component } from 'react';
import Counters from './Counters';
import Grid from '@material-ui/core/Grid';

const imagePaths = {
  mocha: 'mocha.svg'
};

const Links = links => {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {_.map(links, link => (
        <li>
          <a href={link.url}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default class TestLine extends Component {
  render() {
    const imagePath = imagePaths[this.props.type];
    return (
      <Grid container alignItems="center">
        <Grid item xs={4}>
          <Grid container alignItems="center">
            {imagePath && (
              <Grid item>
                <img height="42" width="42" src={imagePath} />
              </Grid>
            )}
            <Grid item>{this.props.label}</Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Counters counters={this.props.counters} />
        </Grid>
        <Grid item xs={2}>
          Duration
        </Grid>
        <Grid item xs={2}>
          {Links(this.props.links)}
        </Grid>
      </Grid>
    );
  }
}
