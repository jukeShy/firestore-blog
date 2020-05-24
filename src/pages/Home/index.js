import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Default } from '~/layouts';
import { Masonry, MasonryItem, Card } from '~components';

const Home = () => {
  const stories = useSelector((state) => state.story.stories);
  return (
    <Default>
      <Masonry>
        {stories.map((story) => (
          <MasonryItem key={story.id}>
            <Link to={`/projects/${story.id}`}>
              <Card story={story} />
            </Link>
          </MasonryItem>
        ))}
      </Masonry>
    </Default>
  );
};

export default Home;
