import React from 'react';

const SubmitButton = ({ submitForm, isValid }) => {
  return (
    <div className='buttonWrapper'>
  <button type='submit' onClick={submitForm} disabled={isValid}>
    publish event
  </button>
  </div>
  );
};

export default SubmitButton;