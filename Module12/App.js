import React,{ Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {Button,Form,FormGroup,Label,Input}
from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';
class EntryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentView: "logIn"
    }
  }
  changeView = (view) => {
    this.setState({
      currentView: view
    })
  }
  currentView = () => {
    switch(this.state.currentView) {
      case "logIn":
        return (
          <form className="body">
            <h2 className="body1">Welcome Back!</h2>
            <fieldset className="content-div">
              <legend className="b">Log In</legend>
              <div></div>
                  <p></p>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required/>
                  <p></p>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                  <p></p>
                  <a onClick={ () => this.changeView("PWReset")} href="#">Forgot Password?</a>
               
            </fieldset>
            <button type="button" onClick={ () => this.changeView("success_sign_in")}>Login</button>
            <p></p>
            <button type="button" onClick={ () => this.changeView("signUp")}>Create an Account</button>
          </form>
          
        )
        break
        case "success_sign_in":
          return (
            <div>
              <h2>successfully loggedin</h2>
         
            </div>
          )
          break
      case "signUp":
        return (
          <form className="body">
            <h2 className="body1">Sign Up</h2>
            <fieldset className="content-div">
              <legend className="b">Create Account</legend>
              
                  <label for="username">Username: </label>
                  <input type="text" id="username" required/>
                  <p></p>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required/>
                  <p></p>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required/>
                  <p></p>

            </fieldset>
            <button type="button" onClick={ () => this.changeView("success_sign_up")}>Submit</button>
            <p></p>
            <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
          </form>
        )
        break
        case "success_sign_up":
        return (
          <div>
            <h2>Signed Up Successfully</h2>
            <div class="buttonForGoToLogin">
            <button type="button" onClick={ () => this.changeView("logIn")}>Go to login page</button>
            </div>
          </div>
        )
        break
      case "PWReset":
        return (
          <form>
          <h2>Reset Password</h2>
          <fieldset>
            <legend>Password Reset</legend>
            <ul>
              <li>
                <em>A reset link will be sent to your inbox!</em>
              </li>
              <li>
                <label for="email">Email:</label>
                <input type="email" id="email" required/>
              </li>
            </ul>
          </fieldset>
          <button>Send Reset Link</button>
          <button type="button" onClick={ () => this.changeView("logIn")}>Go Back</button>
        </form>
        )
      default:
        break
    }
  }
  render() {
    return (
      <section id="entry-page">
        {this.currentView()}
      </section>
    )
  }
}
export default EntryPage;