import React from 'react';

import { Container, Navbar } from './styles';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <Container>
      <Navbar>
        <h4>GuiaCompass.</h4>
        <Link to={'landing'}>Sair</Link>
      </Navbar>
    </Container>
  );
}

export default Header;