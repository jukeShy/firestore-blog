import React from 'react';
import { Link } from 'react-router-dom';
import { Default } from '~/layouts';
import { Card, GridList, GridItem } from '~components';

const Favorites = () => {
  return (
    <Default>
      <h1>Favorites</h1>
      <GridList>
        <GridItem>
          <Link to={`projects/111`}>
            <Card />
          </Link>
        </GridItem>
        <GridItem>
          <Link to={`projects/111`}>
            <Card />
          </Link>
        </GridItem>
        <GridItem>
          <Link to={`projects/111`}>
            <Card />
          </Link>
        </GridItem>
        <GridItem>
          <Link to={`projects/111`}>
            <Card />
          </Link>
        </GridItem>
        <GridItem>
          <Link to={`projects/111`}>
            <Card />
          </Link>
        </GridItem>
      </GridList>
    </Default>
  );
};

export default Favorites;
