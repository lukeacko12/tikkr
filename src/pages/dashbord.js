import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from '../logo.png';
import '../main.css';
import SignupForm from '../forms/signupform';
import fire from '../util/fire'
import {Redirect} from 'react-router-dom';
import SignoutBtn from '../elements/signoutBtn';

function Dashboard(){
    
    const user=fire.auth().currentUser;
    const signedOut = false
    
    if (user) {
        if (signedOut === true) {
            return <Redirect to='/'/>
        }
            

        const username = user.displayName;
        return (
            <div className="App">
              <header className="App-header">
        
              
              <div className="row no-gutters">
                <div className="col">
                  <div className="leftside">
        
                   
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
                              <div className="padding"></div>
                              <div className="padding"></div>
                              <SignoutBtn/>
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
    } else 
    {
        return(
        <h1>You need to signin! click here to go to <a href='/'>Sign in</a></h1>
        );
    };

 
}

export default Dashboard;
