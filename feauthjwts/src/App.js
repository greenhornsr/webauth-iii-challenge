import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';

import SignUp from './Register';
import Login from './Login';
import Users from './UserList';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };
}

export default withRouter(App);
