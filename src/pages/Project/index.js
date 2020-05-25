import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Default, Section } from '~/layouts';
import { Hero, Spinner } from '~components';
import { storyGet } from '~redux/actions/storyActions';

const Project = ({ match }) => {
  let story = useSelector((state) => state.story.story);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storyGet(match.params.id));

    return () => {
      story = { ...story };
    };
  }, [dispatch]);

  return (
    <Default>
      {!story.id ? (
        <Spinner />
      ) : (
        <div className='project with-stack'>
          <Hero image={story.image.src || ''} />
          <Section>
            <h1>{story.title}</h1>
            <p>{story.body}</p>
          </Section>
        </div>
      )}
    </Default>
  );
};

export default Project;
