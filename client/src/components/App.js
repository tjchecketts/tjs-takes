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

class App extends Component {
  
  state = { takes: '' }

  componentDidMount() {
    // axios call?
  }

  addTake = (body) => {
    const {takes} = this.state;
    // axios call?
  }

  updateTake = (id) => {
    // axios call?
  }

  deleteTake = (id) => {
    const { takes } = this.state;
    // axios call?
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <ProtectedRoute exact path='/newtake' component={NewTake} />
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
