import React, { Component } from 'react';
import Axios from 'axios';

class RegForm extends Component {
  state = {
    userName: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value.trim()
    });

    console.log(target.name);
  };

  sendRegister = async data => {
    try {
      const res = await Axios.post('http://localhost:4040/api/register', data);
      console.log('response from API POST:' + JSON.stringify(res));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  sendLogin = async data => {
    try {
      const token = await Axios.post('http://localhost:4040/api/login', data);
      console.log('response from Login :' + JSON.stringify(token).data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  handleSubmitLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.sendLogin({ email, password });
    console.log({ email, password });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('Submited', this.state);
    this.sendRegister(this.state);
    this.setState({
      userName: '',
      email: '',
      password: ''
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12">
            <h2>Register</h2>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="userName"
                  onChange={this.handleChange}
                  type="text"
                />
                <label htmlFor="userName">Full Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  onChange={this.handleChange}
                  type="text"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input name="email" onChange={this.handleChange} type="text" />
                <label htmlFor="userEmail">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  onClick={this.handleSubmit}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <form className="col s12">
            <h2>Login</h2>
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="password"
                  onChange={this.handleChange}
                  type="text"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input name="email" onChange={this.handleChange} type="text" />
                <label htmlFor="userEmail">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button
                  onClick={this.handleSubmitLogin}
                  className="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>

        <button
          onClick={this.getPosts}
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          get posts
        </button>
      </div>
    );
  }
}

export default RegForm;
