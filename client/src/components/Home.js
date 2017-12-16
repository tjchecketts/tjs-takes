import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <div>
          Here are the following takes, opinions and thoughts:
        </div>
      </div>
    );
  }
}

export default Home;
