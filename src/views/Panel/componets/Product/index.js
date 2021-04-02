import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import { AiFillEye } from 'react-icons/ai';
import { RiWhatsappFill } from 'react-icons/ri';

function Product({ data }) {
  return (
    <Container>
      <img alt={'Product'} src={data.imageURLs.[0]} />
      <div className="productInformation">
        <p>{data.name}</p>
        <span>Henn</span>
      </div>

      <div className="options">
        <Link to={'product'}>
          <AiFillEye size={18} color={'#8FA7B2'} />
          <span>Visualizar</span>
        </Link>

        <Link to={'product'}>
          <RiWhatsappFill size={18} color={'#44BD32'} />
          <span>Compartilhar</span>
        </Link>
      </div>
    </Container>
  );
}

export default Product;