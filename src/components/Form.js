import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AboutContainer from './AboutSection/AboutContainer';
import CoordinatorContainer from './CoordinatorSection/CoordinatorContainer';
import WhenContainer from './WhenSection/WhenContainer';
import SubmitButton from './SubmitButton'

import categoriesData from './../data/categories';
import employeesData from './../data/employes';
import SuccessComponent from './SuccessComponent';

class Form extends Component {
  constructor(props) {
    super(props);
  
  this.state = {
    form: {
      title: '',
      description: '',
      categoryId: '',
      paidEvent: false,
      eventFee: '',
      reward: '',
      date: '',
      time: '',
      isAM: true,
      duration: '',
      coordinator: {
        email: '',
        id: 3
      }
    },
    charsLeft: props.maxChars,
    formSent: false,
    titleValid: true,
    descriptionValid: true,
    coordinatorValid: true,
    dateValid: true,
    eventFeeValid: true,
    emailValid: true
  }
}
  handleTextValid(value, field) {
    const { minText } = this.props;
    const isValid = value.length >= minText;
    this.setState({ [`${field}Valid`]: isValid });
  };
  handleEmailValid(email, field) {
    const isValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
    this.setState({ [`${field}Valid`]: isValid });
  };

  countChars() {
    const form = { ...this.state.form };
    let descLength = form.description.length;
    return descLength;
  };

  getLoggedInUser(employeesData) {
    const loggedInId = 3;
    const loggedData = [];
    employeesData.forEach(employee => {
      employee.id === loggedInId && loggedData.push(employee);
    });
    return loggedData;
  };
  getOtherCoordinators(employeesData) {
    const others = [];
    const loggedInId = 3;
    employeesData.forEach(employee => {
      employee.id !== loggedInId && others.push(employee);
    });
    return others;
  };

  handleInputChange = (value, field) => {
    const form = { ...this.state.form };
    switch(field) {
      case 'email': {
        form['coordinator'][field] = value;
        this.setState({ form }, () => this.handleEmailValid(value, 'email'));
        break;
      }
      case 'description': {
        if(value.length <= 140) 
        form[field] = value;
        this.setState({ form }, () => this.handleTextValid(value, 'description'));
        break;
      }
      case 'title' || 'eventFee': {
        form[field] = value;
        this.setState({ form }, () => this.handleTextValid(value, field));
        break;
      }
      case 'duration': {
        const reg = /^-?\d*[.,]?\d*$/;
        if(reg.test(value)===true) {
          form[field] = value;
          this.setState({ form });
        } else {
          return null;
        }
        break;
      }
      case 'reward': {
        const reg = /^-?\d*[.,]?\d*$/;
        if(reg.test(value)===true) {
          form[field] = value;
          this.setState({ form });
        } else {
          return null;
        }
        break;
      }
      case 'eventFee': {
        const reg = /^-?\d*[.,]?\d*$/;
        if(reg.test(value)===true) {
          form[field] = value;
          this.setState({ form }, () => this.handleTextValid(value, field));
        } else {
          return null;
        }
        break;
      }
      default: {
        form[field] = value;
        this.setState({ form });
      }
    }
  };

  handleRadio = (bool, field) => {
    this.setState({ form: { ...this.state.form, [field]: bool} });
  };

  handleSelect = (id, field) => {
    const form = {...this.state.form};
    if (field === 'coordinatorId') {
      form['coordinator']['id'] = id;
    } else {
      form[field] = id;
    }
    this.setState({ form });
  };

  submitForm = event => {
    event.preventDefault();

    /** todo: 
      * add validation rule to empty form
      * change time to 24 hours format
      * concat time and data `${form.date}T{form.time}`
      * format values to number: duration, reward, eventFee, coordinator.id
    **/

    const { titleValid, descriptionValid, coordinatorValid, dateValid, eventFeeValid } = this.state;
    titleValid && descriptionValid && coordinatorValid && dateValid && eventFeeValid && this.setState({ formSent: true });

    console.log(this.state.form);
  };
  
  render() {
    const { 
      form, 
      formSent, 
      descriptionValid,
      titleValid,
      coordinatorValid,
      dateValid,
      emailValid 
    } = this.state;
    const coordinator = { ...form.coordinator };
    const loggedUserData = this.getLoggedInUser(employeesData);
    const otherCoordinatorsData = this.getOtherCoordinators(employeesData);
    let countedCharacters = this.countChars();
    const isValid = descriptionValid && titleValid && coordinatorValid && dateValid;
    return (
      <div className='formContainer'>
      {!formSent ? (
      <form className='container'>
        <AboutContainer 
          titleValue={form.title}
          descValue={form.description}
          paidEventBool={form.paidEvent}
          eventFee={form.eventFee}
          categoryId={form.categoryId}
          categoriesData={categoriesData}
          countedChars={countedCharacters}
          maxChars={this.props.maxChars}
          handleSelect={(id, field) => this.handleSelect(id, field)}
          handleInputChange={(value, field) => this.handleInputChange(value, field)}
          handleRadio={(bool, field) => this.handleRadio(bool, field)}  
          descriptionValid={descriptionValid}
          titleValid={titleValid}
          reward={form.reward}
        />
        <CoordinatorContainer 
          handleInputChange={(value, field) => this.handleInputChange(value, field)}
          coordinatorEmailVal={coordinator.email}
          coordinatorId={coordinator.id}
          loggedUserData={loggedUserData}
          emailValid={emailValid}
          otherCoordinatorsData={otherCoordinatorsData}
          handleSelect={(id, field) => this.handleSelect(id, field)}
          coordinatorValid={coordinatorValid}
        />
        <WhenContainer 
          dateValue={form.date}
          timeValue={form.time}
          handleInputChange={(value, field) => this.handleInputChange(value, field)}
          handleRadio={(bool, field) => this.handleRadio(bool, field)}
          isAMBool={form.isAM}
          durationValue={form.duration}
          dateValid={dateValid}   
        />
        <SubmitButton submitForm={e => this.submitForm(e)} isValid={!isValid}/>
      </form>
      ) : (
        <SuccessComponent />
      )}
      </div>
    );
  }
};

Form.propTypes = {
  maxChars: PropTypes.number.isRequired,
  minText: PropTypes.number.isRequired
};
Form.defaultProps = {
  maxChars: 140,
  minText: 1
};

export default Form;