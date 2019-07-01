import React from 'react';
import Validation from './Validation';

const FormPositionWrapper = ({ 
  positionTitle, 
  children, 
  required,
  isValid
}) => {
  return (
    <div className='formPosition'>
      <div>
        <p>{positionTitle}</p>
        {required && <span>&nbsp;*</span>}
      </div>
      <div>{children}</div>
      {required && !isValid && <Validation validEl={positionTitle} />}
    </div>
  );
};

export default FormPositionWrapper;