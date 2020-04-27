import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import React from 'react';
import fire from '../util/fire';
import {Redirect} from 'react-router-dom';
import { render } from '@testing-library/react';

class SignoutBtn extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            signedOut: false,
        }
        this.signOutFunc = this.signOutFunc.bind(this);
    }
    

        signOutFunc = ()  => {
            const newThis=this
            fire.auth().signOut().then(function() {
                newThis.setState({ signedOut: true})
              }).catch(function(error) {
                console.log(error)
              });
        }

        render(){
            this._isMounted = true;
            if (this.state.signedOut === true) {
                 return <Redirect to='/' />
            }
            return(
                <li className="nav-item active signout">
                    <a className="nav-link signout" onClick={this.signOutFunc}>SIGN OUT</a>             
                </li>
                );
        }

    
  }

export default SignoutBtn;