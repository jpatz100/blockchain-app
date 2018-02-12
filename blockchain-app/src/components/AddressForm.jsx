
import React from 'react';

const AddressForm = props => {
	return (
		<div className="address">
          <form onSubmit={props.handleAddressSubmit}>
          <label>
            Address
           <input name='address' value={props.address} onChange={props.handleAddressChange} type='text' />
          </label>
        </form>
       </div>  
		);
};

export default AddressForm;