import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: ""
    };
  }

  valid() {
    if (!this.state.email.includes("@") && this.state.password.length < 5) {
      this.setState({
        emailError: "Invalid email!",
        passwordError: "Password length should be more than 5"
      });
    } else if (!this.state.email.includes("@")) {
      this.setState({
        emailError: "Invalid email!"
      });
    } else if (this.state.password.length < 5) {
      this.setState({
        passwordError: "Password length should be more than 5!"
      });
    } else {
      return true;
    }
  }

  submit() {
    this.setState({ emailError: "", passwordError: " " });

    if (this.valid()) {
      alert("form has been submited!");
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Form Validation</h1>
        <div>
          <label htmlFor="name">Email : </label>
          <input
            type="text"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <p style={{ color: "red", fontSize: "16px" }}>
            {this.state.emailError}
          </p>
        </div>
        <div>
          <label htmlFor="Password">Password : </label>
          <input
            type="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <p style={{ color: "red", fontSize: "16px" }}>
            {this.state.passwordError}
          </p>
        </div>
        <button onClick={() => this.submit()}>Submit</button>
      </div>
    );
  }
}

export default App;
