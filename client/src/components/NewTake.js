import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class NewTake extends Component {
  
  state = { body: '' }

  handleChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    // stops the form from rendering
    e.preventDefault();
    // from App.js
    this.props.addTake( this.state.body );
    // clears form
    this.setState({ body: '' })
  }

  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>NewTake Component</Header>
        <form>
          <textarea 
            placeholder='Add a take'
            value={this.state.name}
            required

            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default NewTake;
