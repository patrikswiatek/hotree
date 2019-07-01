import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const TitlePosition = ({ titleValue, titleValid, handleInputChange }) => (
    <FormPositionWrapper 
      positionTitle='Title'
      isValid={titleValid}
      required
    >
    <input
      value={titleValue}
      className={!titleValid ? 'invalid titleInput' : 'titleInput'} 
      onChange={e => handleInputChange(e.target.value, 'title')}
      type='text' 
      placeholder='Make it short and clear' />
    </FormPositionWrapper>
);

export default TitlePosition;