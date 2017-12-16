import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Takes extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Takes Component</Header>
        <div>
          Here are the following takes, opinions and thoughts:
        </div>
      </div>
    );
  }
}

export default Takes;