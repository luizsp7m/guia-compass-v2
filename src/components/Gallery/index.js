import React from 'react';

import { Container, Panel, Image, Left, Item, Information } from './styles';

import { FiBox } from 'react-icons/fi';

const image = 'https://staticmobly.akamaized.net/r/2000x2000/p/Mobly-Base-para-Cama-Box-Queen-Premium-com-BaC3BA-Suede-2845x158x19829-Bege-4073-146335-1.jpg';
const loop = 10;

function Gallery() {
  return (
    <Container>
      <Panel>
        <Left>
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
          <Item url={image} />
        </Left>
        <Image url={image} />
      </Panel>

      <Information>
        <span className="recomendation"><b>55</b> pessoas recomendaram esse produto</span>

        <h3 className="name">Sofá 3 Lugares Floret Linho Azul</h3>
        <span><b>SKU:</b> A54DF-55</span>

        <div className="dimensions">
          <h4>Dimensões do produto</h4>

          <div className="dimension">
            <FiBox color="#555" size={18} />
            <span><b>Altura: </b>200cm</span>
          </div>

          <div className="dimension">
            <FiBox color="#555" size={18} />
            <span><b>Largura: </b>200cm</span>
          </div>

          <div className="dimension">
            <FiBox color="#555" size={18} />
            <span><b>Profundidade: </b>200cm</span>
          </div>
        </div>
      </Information>

    </Container>
  );
}

export default Gallery;