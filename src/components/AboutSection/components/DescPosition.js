import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const DescPosition = ({ 
  descValue, 
  countedChars, 
  maxChars, 
  descriptionValid, 
  handleInputChange 
}) => (
    <FormPositionWrapper
      positionTitle='Description'
      isValid={descriptionValid}
      required
    >
      <textarea 
        value={descValue}
        className={!descriptionValid ? 'invalid' : ''}
        onChange={e => handleInputChange(e.target.value, 'description')}
        placeholder='Write about your event, be creative' 
      />
      <div className='descAnnotations'>
        <p className='annotation'>Max length 140 characters</p>
        <p className='annotation'>{countedChars}/{maxChars}</p>
      </div>
    </FormPositionWrapper>
);

export default DescPosition;