import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import TitlePosition from './components/TitlePosition';
import DescPosition from './components/DescPosition';
import PaymentPosition from './components/PaymentPosition';
import RewardPosition from './components/RewardPosition';
import CategoryPosition from './components/CategoryPosition';


const AboutContainer = ({ 
  categoriesData,
  handleInputChange,
  handleRadio, 
  titleValue, 
  descValue,
  paidEventBool,
  eventFee,
  categoryId,
  countedChars,
  maxChars,
  descriptionValid,
  titleValid,
  reward,
  handleSelect 
}) => (
    <SectionContainer title='About'>
      <TitlePosition 
        titleValue={titleValue} 
        descValue={descValue}
        handleInputChange={(value, field) => handleInputChange(value, field)}
        titleValid={titleValid} 
      />
      <DescPosition 
        descValue={descValue}
        countedChars={countedChars}
        maxChars={maxChars}
        handleInputChange={(value, field) => handleInputChange(value, field)}
        descriptionValid={descriptionValid} 
      />
      <CategoryPosition 
        categoryId={categoryId}
        handleSelect={(id, field) => handleSelect(id, field)}
        categoriesData={categoriesData}
      />
      <PaymentPosition 
        paidEventBool={paidEventBool}
        eventFee={eventFee}
        handleRadio={(bool, field) => handleRadio(bool, field)}
        handleInputChange={(value, field) => handleInputChange(value, field)} 
      />
      <RewardPosition 
        reward={reward}
        handleInputChange={(value, field) => handleInputChange(value, field)}
      />
    </SectionContainer>
);

export default AboutContainer;