import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import React from 'react';
import fire from '../util/fire';
import { Redirect } from "react-router-dom";


class SignupForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
          email: '', 
          password: '',
          username: '',
          toDashboard: false,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSignUp(form){
        let thisMe = this
        const email = form['email']
        const password = form['password']
        const username = form['username']
        
        fire.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
            var user = fire.auth().currentUser
            user.updateProfile({
                displayName: username,
            })
            thisMe.setState({toDashboard: true})
            console.log(user)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
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
         email: this.state.email,
         username: this.state.username
        }
        this.handleSignUp(form)
    }
   
  
    render() {
      if (this.state.toDashboard === true) {
        return <Redirect to='/dashboard' />
      } 
      return (
            <form className="pl80 pr70 form" onSubmit = {this.handleSubmit}>
            <input className="form-control email" placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
            <div className="form-padding"></div>
            <input className="form-control password" placeholder="Username" type="input" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <div className="form-padding"></div>
            <input className="form-control password" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
            <div className="form-padding"></div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      );
    }
  }

  export default SignupForm;