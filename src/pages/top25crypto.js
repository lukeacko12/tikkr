import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from '../logo.png';
import '../dashboard.css'
import '../main.css';
import fire from '../util/fire'
import firebase from 'firebase/app';
import 'firebase/auth';
import { Redirect } from 'react-router-dom';
import SignoutBtn from '../elements/signoutBtn';
import CryptoTable from '../elements/cryptoTable';
import { fireEvent } from '@testing-library/react';
import Loader from 'react-loader-spinner'


class Top25Crypto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            timeout: true
        }
    }


    componentDidMount() {
        const myThis = this
        fire.auth().onAuthStateChanged(function (user) {
            console.log('auth state changed')
            console.log(user);
            myThis.setState({
                user: user,
                timeout: false,
            })
        })
    }


    render() {

        if (this.state.timeout === false) {
            if (this.state.user === null) {
                return (
                    <h1>You need to sign in. <a href="/">Click here to sign in </a></h1>
                )
            } else {
                return (
                    <div className="App">
                        <header className="App-header">

                            <div className="d-flex" id="wrapper">

                                <div className="bg-light border-right" id="sidebar-wrapper">
                                    <div className="sidebar-heading">Start Bootstrap </div>
                                    <div class="list-group list-group-flush">
                                        <a href="/dashboard" className="list-group-item list-group-item-action bg-light">Dashboard</a>
                                        <a href='/top25crypto' className="list-group-item list-group-item-action bg-light">Top 25 cryptocurrencies</a>
                                        <a href="#" className="list-group-item list-group-item-action bg-light">Top 25 stocks</a>
                                        <a href="/favorites" className="list-group-item list-group-item-action bg-light">My favourites</a>
                                        <a href="#" className="list-group-item list-group-item-action bg-light">Profile</a>
                                        <a href="#" className="list-group-item list-group-item-action bg-light">Status</a>
                                    </div>
                                </div>
                                <div id="page-content-wrapper">

                                    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <div className="signout-btn">
                                                <SignoutBtn></SignoutBtn>
                                            </div>
                                        </div>
                                    </nav>

                                    <div className="container-fluid">
                                        <CryptoTable />

                                    </div>
                                </div>

                            </div>
                        </header>
                    </div>
                );
            }
        } else {
            return (<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="loader" />)
        }
    }
}






export default Top25Crypto;
