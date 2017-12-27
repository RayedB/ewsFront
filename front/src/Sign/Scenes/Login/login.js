import React from 'react';

/**
 * Class login
 */
class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }
  /**
   * Render view
   */
  render() {
    <h1> LOGIN </h1>;
  }
}

export default Login;
