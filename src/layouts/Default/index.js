import React from 'react';
import { Header } from '~components';

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <main className='layout'>{children}</main>
    </>
  );
};

export default Default;
