import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Default, Section } from '~/layouts';
import { profileSetName } from '../../redux/actions/profileActions';

import { Modal, ProfileForm } from '~components';

const Profile = ({ match }) => {
  const urlUid = match.params.uid;
  const uid = useSelector((state) => state.auth.user.uid);
  const profile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const formSubmitHandler = (form, e) => {
    e.preventDefault();

    dispatch(profileSetName(form.displayName));
  };

  return (
    <Default>
      <Section>
        <h1>{profile.displayName}</h1>
        {urlUid === uid ? (
          <>
            <button data-target='modal1' className='btn modal-trigger'>
              Change Name
            </button>
            <Modal>
              <h2>Hello</h2>
              <ProfileForm onSubmitHandler={formSubmitHandler} />
            </Modal>
          </>
        ) : null}
      </Section>
    </Default>
  );
};

export default Profile;
