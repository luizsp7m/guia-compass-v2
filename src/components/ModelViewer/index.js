import React from 'react';

import '@google/model-viewer'

import { Container } from './styles';

import model from '../../assets/cadeira-sidera.glb';

function ModelViewer() {
  return (
    <Container>
      <model-viewer
          className="teste"
          src={model}
          alt="A 3D model of an astronaut"
          auto-rotate camera-controls >
        </model-viewer>
    </Container>
  );
}

export default ModelViewer;