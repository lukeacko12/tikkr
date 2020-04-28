import 'bootstrap/dist/css/bootstrap.min.css'; //import bootstrap
import '../main.css'; //imports base css styles

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css" //Imports for the loading component
import Loader from 'react-loader-spinner'

import React from 'react'; //Required react imports


import fire from '../util/fire'

class FavouritesTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [], //Declaring variable data within the state of the class
            userFavourites: [],
            render: false
        }
    }

    componentDidMount() { //Ran when component is called eg: <CryptoTable/>
        this.getTableData() //calls gettableData() function
        //console.log('test1')
    }

    callApi(){
        var list = []
        list.push(this.state.userFavourites)
        console.log(list)
        // fetch('http://localhost:4000/crypto/getFav&favArray=:' + myThis.state.userFavourites)//fetches top 10 crypto currencies in json format from my RESTful API
        //             .then(response => response.json()) //gets response.json
        //             .then(data => { //sets it to data variable
        //                 myThis.setState({ data: data, render: true }) //data is then appended to state.data
        //             });
    }

    getTableData = () => {
        var userId = fire.auth().currentUser.uid;
        var ref = fire.database().ref('users/' + userId + '/favourites');
        const myThis = this
        ref.once('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
                myThis.setState({ userFavourites: childData[0] })
                myThis.callApi()
            });
        });

    }

   

    





    renderTableData() {
        //  const nonJson = this.state.data;
        // const jsonData = JSON.parse(JSON.stringify(nonJson));
        // const cryptoDatas = jsonData.apiRes.Data;
        // return cryptoDatas.map((crypto, index) => {
        //     const { CoinInfo, DISPLAY } = crypto;
        //     return (
        //         <tr key={index}>
        //             <td>{CoinInfo.FullName}</td>
        //             <td>{CoinInfo.Name}</td>
        //             <td>{DISPLAY.GBP.VOLUME24HOUR}</td>
        //             <td>{DISPLAY.GBP.VOLUME24HOURTO}</td>
        //             <td>{DISPLAY.GBP.PRICE}</td>
        //         </tr>
        //     )
        // })

        return (<td>hello</td>);

    }

    renderTableHeader() {

        return (
            <tr>
                <th>Name</th>
                <th>Symbol</th>
                <th>Volume in crypto</th>
                <th>Volume in GBP</th>
                <th> Price in GBP</th>
            </tr>
        )

    }



    render() {
        if (this.state.render) {
            return (
                <div>
                    <div className='title-div'>
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

export default FavouritesTable;