import React from 'react';
import LoginForm from '../../Components/LoginForm.js'
/**
 * Class login
 */
class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  /**
   * Render view
   */
  render() {
    return (
    <LoginForm />
    )
  }
}

export default Login;
