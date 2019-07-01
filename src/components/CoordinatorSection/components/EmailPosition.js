import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const EmailPosition = ({ coordinatorEmailVal, emailValid, handleInputChange }) => (
    <FormPositionWrapper
      positionTitle='email'
      isValid={emailValid}
    >
      <input 
        type='email' 
        placeholder='Email' 
        value={coordinatorEmailVal} 
        className={!emailValid ? 'invalid' : ''}
        onChange={e => handleInputChange(e.target.value, 'email')}
      />
    </FormPositionWrapper>
);

export default EmailPosition;