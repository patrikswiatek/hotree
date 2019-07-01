import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import StartsOn from './components/StartsOn';
import Duration from './components/Duration';

const WhenContainer = ({ 
  dateValue, 
  timeValue, 
  isAMBool, 
  durationValue,
  dateValid, 
  handleInputChange, 
  handleRadio 
}) => {
  return (
    <SectionContainer title='When'>
      <StartsOn 
        dateValue={dateValue} 
        timeValue={timeValue}
        handleInputChange={(value, field) => handleInputChange(value, field)}
        handleRadio={(bool, field) => handleRadio(bool, field)}
        isAMBool={isAMBool}
        dateValid={dateValid}
      />
      <Duration 
       durationValue={durationValue}
       handleInputChange={(value, field) => handleInputChange(value, field)}
      />
    </SectionContainer>
  );
};

export default WhenContainer;