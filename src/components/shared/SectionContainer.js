import React from 'react';

const SectionContainer = ({ title, children }) => {
  return (
    <div className='sectionContainer'>
      <h2 className='sectionTitle'>{title}</h2>
      <span className='sectionUnderline'></span>
      {children}
    </div>
  );
};

export default SectionContainer;