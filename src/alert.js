import M from 'materialize-css/dist/js/materialize.min.js';

const Alert = () => {
  const createToast = (message) => {
    M.toast({ html: message });
  };

  return {
    createToast,
  };
};

const alert = Alert();

export { alert };
