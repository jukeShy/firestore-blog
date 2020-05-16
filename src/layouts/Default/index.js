import React from 'react';
import { Header } from '~components';

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <main className='layout'>
        <div className='row'>
          <div className='col s12'>{children}</div>
        </div>
      </main>
    </>
  );
};

export default Default;
