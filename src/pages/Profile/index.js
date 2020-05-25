import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Default, Section } from '~/layouts';
import { profileSetName, profileGet } from '~redux/actions/profileActions';

import { Modal, ProfileForm, Spinner } from '~components';

const Profile = ({ match }) => {
  const { profile, isLoading } = useSelector((state) => state.profile);

  const urlUid = match.params.uid;
  const uid = useSelector((state) => state.auth.user.uid);
  const isCurrentProfile = urlUid === uid ? true : false;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileGet(urlUid));
  }, [dispatch, urlUid]);

  const formSubmitHandler = (form, e) => {
    e.preventDefault();

    dispatch(profileSetName(form.displayName));
  };

  return (
    <Default>
      {isLoading ? (
        <Spinner />
      ) : (
        <Section>
          <h1>{profile.displayName}</h1>
          {isCurrentProfile ? (
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
      )}
    </Default>
  );
};

export default Profile;
