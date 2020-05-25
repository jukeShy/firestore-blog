import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Modal = ({ children }) => {
  const classname = 'modal';

  useEffect(() => {
    const elem = document.querySelector(`.${classname}`);
    M.Modal.init(elem, {});

    return () => {
      const instanse = M.Modal.getInstance(elem);

      instanse.destroy();
    };
  }, []);

  return (
    <div id='modal1' className={classname}>
      <div className='modal-content'>{children}</div>
      <div className='modal-footer'>
        <a href='#!' className='modal-close waves-effect waves-green btn-flat'>
          Close
        </a>
      </div>
    </div>
  );
};

export default Modal;
