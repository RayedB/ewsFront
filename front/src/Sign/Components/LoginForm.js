import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(ev) {
    this.setState({[ev.target.name]: ev.target.value});
  }
  onSubmit(ev) {
    ev.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label className="control-label">email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
          <label className="control-label">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChange} className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
