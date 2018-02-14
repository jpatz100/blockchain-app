import React, { Component } from 'react';
import axios from 'axios';
import AddressForm from './components/AddressForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: [],
      apiDataLoaded: false,
      address: ''
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }  

  //Handler method targets and then logs the users address input into the console
  handleAddressChange(e) {
    console.log(e.target.value);
    const target = e.target
    const address = target.value

    this.setState({ address: address})
  }


//submit method uses Axios to GET the data back from the API and then plugs in the users BTC wallet address. 
 handleAddressSubmit (e) {
   e.preventDefault();
   console.log(`about to submit ${this.state.address}`)
   axios.get('https://blockchain.info/rawaddr/'+ this.state.address)
   .then(res => {
    console.log(res.data);
    this.setState({
      apiData: res.data, 
      apiDataLoaded: true,
    });
   });
 }

 //Checks to see if API data was successfully retrieved, then it is rendered onto the page. 
//.map function was required in order to extract the data from the JSON array. 
  render() {                     
    if(this.state.apiData.txs) {
      console.log('in txs return')
      {console.log(this.state.apiData.txs)}
      return (
      <div className="App">
        <AddressForm address={this.state.address}
        handleAddressChange = {this.handleAddressChange}
        handleAddressSubmit = {this.handleAddressSubmit}
        />
        <h1> Available Balance: {this.state.apiData.final_balance} BTC </h1>
        <h2> Recent Transactions: </h2>
          <ul className="output">
            {this.state.apiData.txs.map((el, i) => {      
              return <ol> <p> Hash ID: </p> {el.hash} </ol>
            })} 
          </ul>
        </div>
      );
    } else {  //An IF-ELSE Statement was used in order to test parts of the code. 
      return (
      <div className="App">
        <AddressForm address={this.state.address}
        handleAddressChange = {this.handleAddressChange}
        handleAddressSubmit = {this.handleAddressSubmit}
        />
        <h1> Available Balance: {this.state.apiData.final_balance} BTC </h1>
      </div>
      );
    }
  }
}

export default App;
