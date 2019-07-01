import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const ResponsiblePosition = ({ coordinatorId, coordinatorValid, handleSelect, loggedUserData, otherCoordinatorsData }) => (
    <FormPositionWrapper
     positionTitle='Responsible'
     isValid={coordinatorValid}
     required
    >
      <select 
        defaultValue={loggedUserData[0].id} 
        onChange={e => handleSelect(e.target.value, 'coordinatorId')}
      >
      <option value='' disabled>
          Me
        </option>
        <option value={loggedUserData[0].id}>
          {loggedUserData[0].name} {loggedUserData[0].lastname}
        </option>
        <option value='' disabled>
          Others
        </option>
      {otherCoordinatorsData.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.name} {employee.lastname}</option>
      ))}
      </select>
    </FormPositionWrapper>
);

export default ResponsiblePosition;