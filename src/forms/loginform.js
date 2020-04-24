import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import React from 'react';
import fire from '../util/fire';
import {Redirect} from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          email: '', 
          password: '',
          toDashboard: false,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogin(form){
        let thisClone = this
    
        const email = form['email']
        const password = form['password']
        fire.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            var errorMessage = error.message
            console.log(errorMessage)
        });
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
              console.log(user)
              thisClone.setState({ toDashboard: true })

              
            } else {
              // No user is signed in.
            }
        });          
    }

   
    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
        });
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        const form = {
         password: this.state.password,
         email: this.state.email
        }
        this.handleLogin(form)
    }
   
  
    render() {
      if (this.state.toDashboard === true) {
        return <Redirect to='/dashboard' />
      }
      return (
            <form className="pl80 pr70 form" onSubmit = {this.handleSubmit}>
            <input className="form-control email" placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
            <div className="form-padding"></div>
            <input className="form-control password" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <div className="form-padding"></div>
            <button type="submit" className="btn btn-primary">Login</button>
            <span className="signup-msg">Don't have an account? </span><a href='/signup'>Sign Up!</a>
        </form>
      );
    }
  }

  export default LoginForm;