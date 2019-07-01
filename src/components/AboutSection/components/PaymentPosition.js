import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const PaymentPosition = ({ paidEventBool, eventFee, handleInputChange, handleRadio }) => (
    <FormPositionWrapper positionTitle='payment'>
      <div className='radioContainer'>
      <label>
        <input
          type='radio' 
          name='freeEvent'
          value={false}
          checked={false === paidEventBool}
          onChange={() => handleRadio(false, 'paidEvent')}
        />
        Free event
      </label>
      <label>
        <input
          type='radio' 
          name='paidEvent'
          value={true}
          checked={true === paidEventBool}
          onChange={() => handleRadio(true, 'paidEvent')}
        />
          Paid event
      </label>
        {paidEventBool &&
        <>
          <input 
            type='text' 
            placeholder='Fee' 
            value={eventFee} 
            onChange={e => handleInputChange(e.target.value, 'eventFee')}
          />
          <p>$</p>
        </>}
      </div>
    </FormPositionWrapper>
);

export default PaymentPosition;