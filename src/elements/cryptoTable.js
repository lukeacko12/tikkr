import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap
import '../main.css'; //imports base css styles

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css" //Imports for the loading component
import Loader from 'react-loader-spinner'

import React from 'react'; //Required react imports

import baseline_star_black_18dp from '../baseline_star_black_18dp.png'
import baseline_star_border_black_18dp from '../baseline_star_border_black_18dp.png'

import fire from '../util/fire'

class CryptoTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], //Declaring variable data within the state of the class
            render: false,
            index: 0,
            imgList: [baseline_star_border_black_18dp, baseline_star_black_18dp]
        }
    }

    componentDidMount() { //Ran when component is called eg: <CryptoTable/>
        this.getTableData() //calls gettableData() function
        //console.log('test1')
    }

    getTableData = () => {
        fetch('http://localhost:4000/crypto/top_list&ammt=25')//fetches top 10 crypto currencies in json format from my RESTful API
            .then(response => response.json()) //gets response.json
            .then(data => { //sets it to data variable
                this.setState({ data: data, render: true }) //data is then appended to state.data
            });
    }



    
    handleClick = param => e => {
        const user = fire.auth().currentUser;
        const uid = user.uid;
        const stock = param;

        e.target.setAttribute('src', this.state.imgList[1]);

        var updates = [stock]

        return fire.database().ref().child('users').child(uid).child('favourites/').push(updates);
    };

    renderTableData() {
        const nonJson = this.state.data;
        const jsonData = JSON.parse(JSON.stringify(nonJson));
        const cryptoDatas = jsonData.apiRes.Data;
        return cryptoDatas.map((crypto, index) => {
            const { CoinInfo, DISPLAY } = crypto;
            return (
                <tr key={index}>
                    <td>{CoinInfo.FullName}</td>
                    <td>{CoinInfo.Name}</td>
                    <td>{DISPLAY.GBP.VOLUME24HOUR}</td>
                    <td>{DISPLAY.GBP.VOLUME24HOURTO}</td>
                    <td>{DISPLAY.GBP.PRICE}</td>
                    <td><img src={this.state.imgList[0]} onClick={this.handleClick(CoinInfo.Name)}></img></td>
                </tr>
            )
        })

    }

    renderTableHeader() {

        return (
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Volume in crypto</th>
                <th>Volume in GBP</th>
                <th> Price in GBP</th>
                <th>Favourite</th>
            </tr>
        )

    }



    render() {
        if (this.state.render) {
            return (
                <div>
                    <div className='title-div'> 
                    <h1 id='title'>Tikkr's top 25 crypto currencies</h1>
                    </div>
                    <table id='students'>
                        <tbody>
                            {this.renderTableHeader()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            return (<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} className="loader" />)
        }
    }

}

export default CryptoTable;