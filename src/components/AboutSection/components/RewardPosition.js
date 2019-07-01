import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const RewardPosition = ({ reward, handleInputChange }) => (
    <FormPositionWrapper
      positionTitle='reward'
    >
    <div className='rewardContainer'>
    <input
      value={reward} 
      onChange={e => handleInputChange(e.target.value, 'reward')}
      name='reward'
      type='text'
      placeholder='Number' 
    />
      <p>reward points for attendance</p>
    </div>
    </FormPositionWrapper>
);

export default RewardPosition;