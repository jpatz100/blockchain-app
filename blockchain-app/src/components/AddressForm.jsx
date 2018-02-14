
import React from 'react';

const AddressForm = props => {
	return (
		<div className="address">
     <h1 className="main-head"> Blockchain Wallet Search </h1>
          <form onSubmit={props.handleAddressSubmit}>
          <label className="address-label">
            BTC Address
           <input className="input-box" name='address' value={props.address} onChange={props.handleAddressChange} type='text' />
          </label>
        </form>
       </div>  
		);
};

export default AddressForm;