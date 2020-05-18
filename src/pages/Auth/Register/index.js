import React from 'react';
import { useDispatch } from 'react-redux';
import { userRegister } from '~redux/actions/authActions';
import { Link } from 'react-router-dom';
import { Center } from '~/layouts';
import { Form } from '~components';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = (form, e) => {
    e.preventDefault();

    dispatch(userRegister(form.email, form.password));
  };

  return (
    <Center>
      <Form
        formTitle='Register'
        onSubmitHandler={onSubmit}
        Link={<Link to='/login'>Already have an account?</Link>}
      />
    </Center>
  );
};

export default Register;
