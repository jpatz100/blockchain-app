import React, { Component } from 'react';
import axios from 'axios';
import AddressForm from './components/AddressForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiData: null,
      apiDataLoaded: false,
      transactionData: false,
      address: ''
    };
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleAddressSubmit = this.handleAddressSubmit.bind(this);
  }  


  handleAddressChange(e) {
    console.log(e.target.value);
    const target = e.target
    const address = target.value

    this.setState({ address: address})
  }

 handleAddressSubmit (e) {
   e.preventDefault();
   console.log(`about to submit ${this.state.address}`)
   axios.get('https://blockchain.info/rawaddr/'+ this.state.address)
   .then(res => {
    console.log(res.data);
    console.log(res.data.final_balance)
    this.setState({
      apiData: res.data.final_balance, 
      apiDataLoaded: true,
    });
   });
 }




  render() {
    return (
      <div className="App">
        <AddressForm address={this.state.address}
        handleAddressChange = {this.handleAddressChange}
        handleAddressSubmit = {this.handleAddressSubmit}
        />
        <h1> Available Balance: {this.state.apiData} BTC </h1>
      </div>
    );
  }
}

export default App;
