import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  state = {
    loginUser: "",
    loginCode: "",
  };

  userHandler = (event) => {
    this.setState({
      loginUser: event.target.value,
    });
  };

  codeHandler = (event) => {
    this.setState({
      loginCode: event.target.value,
    });
  };

  loginFunc = () => {
    const { loginUser, loginCode } = this.state
        if(loginUser === 'Akaldosama' && loginCode === '1234'){
                alert('Successfully')
        }else{
            alert('Error')
        }
  };
  render() {
    return (
      <div className="container my-5">
        <div className="card">
          <div className="card-header text-center">
            <h1>Login</h1>
          </div>
          <div className="card-body">
            <input type="text" placeholder="Username" className="form-control mb-4" onChange={this.userHandler} />
            <input type="text" placeholder="Code" className="form-control" onChange={this.codeHandler}/>
            <Link to='/Carlist' className="btn btn-primary mt-4" onClick={this.loginFunc}>Submit</Link>
          </div>
        </div>
      </div>
    );
  }
}
