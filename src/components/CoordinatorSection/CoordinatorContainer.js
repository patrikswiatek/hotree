import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import ResponsiblePosition from './components/ResponsiblePosition';
import EmailPosition from './components/EmailPosition';

const CoordinatorContainer = ({ coordinatorEmailVal, coordinatorId, loggedUserData, otherCoordinatorsData, coordinatorValid, emailValid, handleInputChange, handleSelect }) => (
    <SectionContainer title='Coordinator'>
      <ResponsiblePosition 
        coordinatorId={coordinatorId}
        handleSelect={(id, field) => handleSelect(id, field)}
        loggedUserData={loggedUserData}
        otherCoordinatorsData={otherCoordinatorsData}
        coordinatorValid={coordinatorValid}
      />
      <EmailPosition 
        coordinatorEmailVal={coordinatorEmailVal}
        emailValid={emailValid}
        handleInputChange={(value, field) => handleInputChange(value, field)}
      />
    </SectionContainer>
);

export default CoordinatorContainer;