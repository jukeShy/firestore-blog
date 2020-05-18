import React from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '~redux/actions/authActions';
import { Link } from 'react-router-dom';
import { Center } from '~/layouts';
import { Form } from '~components';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = (form, e) => {
    e.preventDefault();

    dispatch(userLogin(form.email, form.password));
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
