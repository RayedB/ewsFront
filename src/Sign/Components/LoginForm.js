import React from 'react'
import { Form, Input, Button } from 'element-react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      form: {
        email: '',
        password: ''
      }
    }
  }
  onChange(key, val) {
    this.setState({
      form: Object.assign(this.state.form, { [key]: val })
    })
  }
  onSubmit(ev) {
    ev.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <Form inline={true} model={this.state.form} onSubmit={this.onSubmit.bind(this)}>
        <Form.Item>
          <Input value={this.state.form.email} placeholder="john.snow@email.com" onChange={this.onChange.bind(this, 'email')}></Input>
        </Form.Item>
        <Form.Item>
        <Input type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')}></Input>
        </Form.Item>
        <Form.Item>
          <Button nativeType="submit" type="primary">Login</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default LoginForm;
