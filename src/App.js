import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Link, Redirect, withRouter} from 'react-router-dom';
import Home from './Home/Home';
import Login from './Sign/Scenes/Login/login';
import Register from './Sign/Scenes/Register/register';
import Navbar from "./Components/Navbar/Navbar"
// import Content from "./components/zones/content/Content"
import './App.css'

import 'element-theme-default'


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render ={(props) => (
    fakeAuth.isAuthenticated === true ? <Component {...props} /> : <Redirect to={{pathname:'/login', state:{ from: props.location } }}/>
  )} />
)

// class Login extends React.Component {
//   state = {
//     redirectToReferrer: false
//   }
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//   }
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//     const { redirectToReferrer } = this.state
//     if (redirectToReferrer === true) {
//       <Redirect to= {Home} />
//     }
//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

export default function App () {
    return (
        <div>
        <Navbar/>
          <Route path="/login" component={Login} />
          <Route path="/register" exact={true} component={Register}/>
          //Protected routes
        </div>
    )
  }
