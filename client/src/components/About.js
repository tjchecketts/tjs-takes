import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>About Component</Header>
        <div>
          Here's some info about this site
        </div>
      </div>
    );
  }
}

export default About;