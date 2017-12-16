import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import NewTake from './NewTake';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  
  state = { takes: '' }

  componentDidMount() {
    axios.get('/api/takes')
      .then (res => this.setState ({ takes: res.data }))
  }

  addTake = (body) => {
    const {takes} = this.state;
    axios.post('/api/takes', { take: {body}} )
      .then( res => {
        this.setState({ takes: [res.data, ...takes] })
      })
  }

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
    // console.log("add" + this.addTake)
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <ProtectedRoute exact path='/newtake' component={NewTake} addTake={this.addTake} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
