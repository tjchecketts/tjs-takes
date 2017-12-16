import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import NewTake from './NewTake';

class Home extends Component {
    
  state = { takes: '' }
  
    // componentDidMount() {
    //   axios.get('/api/takes')
    //     .then (res => this.setState ({ takes: res.data }))
    // }
  
    addTake = (body) => {
      const {takes} = this.state;
      axios.post('/api/takes', { take: {body}} )
        .then( res => {
          this.setState({ takes: [res.data, ...takes] })
        })
    }
  
    // handleSubmit = (e) => {
    //   // stops the form from rendering
    //   e.preventDefault();
    //   // from App.js
    //   // this.addTake(this.state.body);
    //   // clears form
    //   this.setState({ body: '' })
    // }
  
    updateTake = (id) => {
      axios.put(`/api/items/${id}`)
        .then( res => {
          let takes = this.state.takes.map( take => {
            if (take.id === id)
              return res.data
            return take
          })
          this.setState({ takes })
        })
    }
  
    deleteTake = (id) => {
      const { takes } = this.state;
      axios.delete(`/spi/takes/${id}`)
        .then( res =>
          this.setState({ takes: takes.filter( t => t.id !== id ) }
        )
      )
    }
  
  render() {
    return (
      <div>
        <NewTake 
          addTake={this.addTake}
        />

      </div>
    );
  }
}

export default Home;
