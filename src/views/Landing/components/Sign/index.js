import React from 'react';

import { Container } from './styles';

import { Form, InputGroup } from '../../styles';

import { MdClose } from 'react-icons/md';

function Sign({ close }) {
  return (
    <Container>
      <Form style={{ position: 'relative' }}>
        <MdClose
          size={24}
          color={'#EA2027'}
          onClick={() => close(false)}
          style={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
            cursor: 'pointer',
          }}
        />

        <h3>Sign In</h3>

        <InputGroup>
          <span>E-mail</span>
          <input type="email" />
        </InputGroup>

        <InputGroup>
          <span>Senha</span>
          <input type="password" />
        </InputGroup>

        <InputGroup>
          <span>Confirme sua senha</span>
          <input type="password" />
        </InputGroup>

        <button>Cadastrar</button>
      </Form>
    </Container>
  );
}

export default Sign;