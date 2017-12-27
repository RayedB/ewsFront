import React from 'react';
import RegisterForm from '../../Components/RegisterForm.js'
/**
 * Class login
 */
class Register extends React.Component {
  state = {
    redirectToReferrer: false
  }

  /**
   * Render view
   */
  render() {
    return (
    <RegisterForm />
    )
  }
}

export default Register;
