import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './style.css';

const Form = ({ formTitle = 'Form', onSubmitHandler, Link }) => {
  const isFormSending = useSelector((state) => state.auth.isFormSending);

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className='auth-form z-depth-1'
      onSubmit={onSubmitHandler.bind(this, form)}
    >
      <h1>{formTitle}</h1>
      <div className='row'>
        <div className='input-field col s12'>
          <input
            placeholder='name@domain.com'
            id='email'
            type='email'
            className='validate'
            name='email'
            value={form.email}
            onChange={onChangeHandler}
            disabled={isFormSending}
          />
          <label htmlFor='email' className='active'>
            Email
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='input-field col s12'>
          <input
            placeholder='Placeholder'
            id='password'
            type='password'
            className='validate'
            name='password'
            value={form.password}
            onChange={onChangeHandler}
            disabled={isFormSending}
          />
          <label htmlFor='password' className='active'>
            Password
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='inpuut-field col s12'>
          <button type='submit' className='btn' disabled={isFormSending}>
            Submit
          </button>
        </div>
      </div>
      <div className='row'>
        <div className='inpuut-field col s12'>{Link}</div>
      </div>
    </form>
  );
};

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  Link: PropTypes.object,
};

export default Form;
