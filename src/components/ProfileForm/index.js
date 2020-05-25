import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileForm = ({ onSubmitHandler }) => {
  const displayName = useSelector(
    (state) => state.profile.currentProfile.displayName,
  );

  const [form, setForm] = useState({
    displayName,
    photoUrl: '',
  });

  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmitHandler.bind(this, form)}>
      <div className='row'>
        <div className='input-field col s6'>
          <input
            name='displayName'
            value={form.displayName}
            onChange={onChangeHandler}
            id='name'
            type='text'
            className='validate'
          />
          <label className='active' htmlFor='name'>
            Name
          </label>
        </div>
        <div className='input-field col s6'>
          <input
            name='photoUrl'
            value={form.photoUrl}
            onChange={onChangeHandler}
            id='photoUrl'
            type='url'
            pattern='https://.*'
            placeholder='https://example.com'
            className='validate'
          />
          <label className='active' htmlFor='photoUrl'>
            Photo Url
          </label>
        </div>
      </div>
      <div className='row'>
        <div className='col s6'>
          <button className='btn' type='url'>
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
