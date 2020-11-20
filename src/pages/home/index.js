import React, {useState, useEffect} from 'react';
import {Container} from './styles';
import Map from '../../components/Map';

const Home = ({navigation}) => {
  return (
    <Container>
      <Map />
    </Container>
  );
};

export default Home;
