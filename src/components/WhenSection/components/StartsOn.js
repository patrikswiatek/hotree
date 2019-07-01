import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const StartsOn = ({ dateValue, timeValue, isAMBool, dateValid, handleInputChange, handleRadio }) => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const date = `${yyyy}-${mm}-${dd}`;
  return (
    <FormPositionWrapper
      positionTitle='Starts on'
      isValid={dateValid}
      required
    >
    <div className='startsOnContainer'>
      <input 
        type='date'
        className={!dateValid ? 'invalid' : ''} 
        min={date}
        value={dateValue}
        onChange={e => handleInputChange(e.target.value, 'date')}
      />
      <p>at</p>
      <input 
        type='time' 
        value={timeValue}
        onChange={e => handleInputChange(e.target.value, 'time')}
      />
      <label>
        <input 
          type='radio' 
          name='AM'
          value={true}
          checked={true === isAMBool}
          onChange={() => handleRadio(true, 'isAM')}
        />
          AM
        </label>
      <label>
        <input 
          type='radio' 
          name='PM'
          value={false}
          checked={false === isAMBool}
          onChange={() => handleRadio(false, 'isAM')}
        />
          PM
        </label>
      </div>
    </FormPositionWrapper>
  );
};

export default StartsOn;