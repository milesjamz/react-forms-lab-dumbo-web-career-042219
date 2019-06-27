import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

handleNameInputChange = (e) => {
  this.setState({
    username: e.target.value
  })
}

handlePasswordInputChange = (e) => {
  this.setState({
    password: e.target.value
  })
}

handleSubmit = (e) => {
  if (!this.state.username || !this.state.password) return
    this.props.handleLogin(e, this.state)
}

  render() {
    return (
      <form>
        <div>
          <label>
            Username

            <input id="username" 
             name="username" 
             type="text" 
             value={this.state.username}
             onChange={this.handleNameInputChange}
             />

          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
             name="password" 
             type="password" 
             value={this.state.password}
             onChange={this.handlePasswordInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit"
                  onClick={this.handleSubmit}
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
