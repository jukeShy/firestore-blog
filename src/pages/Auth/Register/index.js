import React from 'react';
import { Link } from 'react-router-dom';
import { Center } from '~/layouts';
import { Form } from '~components';

const Register = () => {
  const onSubmit = (form, e) => {
    e.preventDefault();
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
