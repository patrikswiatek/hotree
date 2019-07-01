import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const Duration = ({ durationValue, handleInputChange }) => (
    <FormPositionWrapper
      positionTitle='duration'
    >
      <div className='durationContainer'>
      <input
        value={durationValue} 
        onChange={e => handleInputChange(e.target.value, 'duration')}
        name='duration'
        type='text'
        placeholder='Number' 
      />
      <p>hours</p>
      </div>
    </FormPositionWrapper>
);

export default Duration;