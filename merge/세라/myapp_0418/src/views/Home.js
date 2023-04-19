import React from 'react';

// reactstrap components
import { Button, Container } from 'reactstrap';
import IndexHeader from 'components/Headers/IndexHeader';
import IndexBody from 'components/Body/IndexBody';

// core components

function Home() {
  return (
    <>
      <IndexHeader />
      <IndexBody />
    </>
  );
}

export default Home;
