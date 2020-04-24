import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from '../logo.png';
import '../main.css';
import SignupForm from '../forms/signupform';



function Signup() {
  return (
    <div className="App">
      <header className="App-header">

      <div className="row no-gutters">
        <div className="col">
          <div className="leftside">

            <div className="introduction">

              <h1 className="title"> We are Tikkr </h1>
              <p className="p-msg">Welcome, Please enter your information below to sign up</p>

            </div>
            <div>
              <SignupForm/>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="rightside">
            <div className="navBarDiv">
              <nav className="navbar navbar-expand-lg navbar-light ">
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">ABOUT <span className="sr-only">(current)</span></a>
                      </li>
                      <div className="padding"></div>
                      <div className="padding"></div>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">CONTACT</a>
                      </li>
                      <div className="padding"></div>
                      <div className="padding"></div>
                      <li className="nav-item active">
                        <a className="nav-link" href="#">HELP</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div class="logo-container"> <img src={logo} className="logo"></img></div>
          </div>
        </div>
      </div>
      
      </header>
    </div>
  );
}

export default Signup;
