import React, { Component } from 'react';
import { Header, Form, TextArea, Button } from 'semantic-ui-react';

class NewTake extends Component {
  state = { body: '' }

  handleChange = (e) => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = (e) => {
    // stops the form from rendering
    e.preventDefault();
    // from App.js
    // this.props.addTake(this.state.body);
    // clears form
    this.setState({ body: '' })
  }

  render() {
    console.log("props: " + this.props.addTake)
    console.log("body: " + this.state.body)
    return (
      <div>
        <Header as='h1' textAlign='center'>NewTake Component</Header>
        <Form>
          <TextArea 
            placeholder='Add a take'
            value={this.state.body}
            required
            autoHeight
            onChange={this.handleChange}
          />
          <br/>
          <br/>
          <Button onClick={this.handleSubmit}>Submit Here</Button>
        </Form>
      </div>
    );
  }
}

export default NewTake;
