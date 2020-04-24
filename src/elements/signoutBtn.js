import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import React from 'react';
import fire from '../util/fire';
import {Redirect} from 'react-router-dom';

class SignoutBtn extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            signedOut: false,
        }
        if (this.state.signedOut === true) {
            return <Redirect to='/' />
        }
        const thisMe = this;
        return(
            
            <li className="nav-item active signout">
                <a className="nav-link signout" onClick={() => {
                    console.log('Signed Out')
                    fire.auth().signOut().then(function() {
                            thisMe.setState({ signedOut: true})
                        }).catch(function(error) {
                        // An error happened.
                    });
                }}>SIGN OUT
                </a>
                                
            </li>
        );


    
  }
}

export default SignoutBtn;