import React from 'react';

const Validation = ({ validEl }) => (
  <>
    <span className='arrowLeft' />
    <div className='validContainer'>
      {validEl} cannot be empty
    </div>
  </>
);

export default Validation;