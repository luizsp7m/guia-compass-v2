import React from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import Gallery from '../../components/Gallery';
import Description from '../../components/Description';
import Details from '../../components/Details';
import ModelViewer from '../../components/ModelViewer';
import Parallax from '../../components/Parallax';

function Product() {
  return (
    <Container>
      <Header />
      <Gallery />
      <Description />
      <Details />
      <Parallax />
      <ModelViewer />
      <Parallax />
    </Container>
  );
}

export default Product;