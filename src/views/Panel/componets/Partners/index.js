import React from 'react';

import { Container } from './styles';

import Henn from '../../../../assets/henn.png'

function Partners() {
  return (
    <Container>
      <h4>Apoiado por</h4>

      <div className="partners">
        <img src={Henn} alt={'Henn'} />
        <img src={Henn} alt={'Henn'} />
        <img src={Henn} alt={'Henn'} />
        <img src={Henn} alt={'Henn'} />
        <img src={Henn} alt={'Henn'} />
      </div>
    </Container>
  );
}

export default Partners;