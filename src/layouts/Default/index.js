import React from 'react';
import { Header } from '~components';

const Default = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Default;
