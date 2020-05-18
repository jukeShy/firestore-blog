import React from 'react';
import { Link } from 'react-router-dom';
import { Center } from '~/layouts';
import { Form } from '~components';

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Center>
      <Form
        formTitle='Login'
        onSubmitHandler={onSubmit}
        Link={<Link to='/register'>Don't have an account?</Link>}
      />
    </Center>
  );
};

export default Login;
