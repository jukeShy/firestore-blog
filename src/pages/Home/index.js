import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Default } from '~/layouts';
import { Masonry, MasonryItem, Card, Spinner } from '~components';

const Home = () => {
  let stories = useSelector((state) => state.story.stories);
  const isLoading = useSelector((state) => state.story.isLoading);

  stories = stories.map((story) => (
    <MasonryItem key={story.id}>
      <Link to={`/projects/${story.id}`}>
        <Card story={story} />
      </Link>
    </MasonryItem>
  ));

  return (
    <Default>
      {isLoading ? (
        <Spinner />
      ) : (
        <Masonry>
          {stories?.length > 0 ? stories : 'There is no stories yet'}
        </Masonry>
      )}
    </Default>
  );
};

export default Home;
