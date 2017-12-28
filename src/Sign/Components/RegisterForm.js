import React from 'react';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  }
  render() {
    return (
      <form>
        <h1>Join Monarq</h1>
        <div className="form-group">
          <label className="control-label">First Name</label>
          <input type="text" name="firstname" className="form-control" />
          <label className="control-label">Last Name</label>
          <input type="text" name="lastname" className="form-control" />
          <label className="control-label">email</label>
          <input type="email" name="lastname" className="form-control" />
          <label className="control-label">password</label>
          <input type="password" name="password" className="form-control" />
          <label className="control-label">password confirmation</label>
          <input type="password" name="password_confirmation" className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    );
  }
}

export default RegisterForm;
