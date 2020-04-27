import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';
import React from 'react';

class CryptoTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }



    renderTableData(){


        fetch('http://localhost:4000/crypto/top_list&ammt=10')
        .then(response => response.json())
        .then(data => {
            this.setState({ data: data })
            console.log(data)
            //this.testfunc()
        });

        
        
    }

    testfunc(){
        this.state.data.map((crypto, index) => {
            const { CoinInfo } = crypto
            console.log(crypto);
        })
    }

    render() {
        this.renderTableData()
        return(<h1>Hello world</h1>)
  }
}

export default CryptoTable;