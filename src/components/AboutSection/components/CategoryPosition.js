import React from 'react';
import FormPositionWrapper from '../../shared/FormPositionWrapper';

const CategoryPosition = ({ categoriesData, categoryId, handleSelect }) => (
    <FormPositionWrapper
      positionTitle='category'
    >
      <select 
        value={categoryId}
        onChange={e => handleSelect(e.target.value, 'categoryId')}
      >
        <option value='' disabled>
          Select category
        </option>
        {categoriesData.map(category => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <p className='annotation'>Describes topic and people who should be interested in this event</p>
    </FormPositionWrapper>
);

export default CategoryPosition;