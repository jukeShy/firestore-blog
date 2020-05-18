import React from 'react';
import { Link } from 'react-router-dom';
import { Default, Section } from '~/layouts';
import { Card, GridList, GridItem } from '~components';

const Favorites = () => {
  return (
    <Default>
      <Section>
        <h1>Favorites</h1>
      </Section>
      <Section>
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
      </Section>
    </Default>
  );
};

export default Favorites;
