import React, { useState } from 'react';

import { Container, Left, Hero, Right, Form, InputGroup } from './styles';

import { Link } from 'react-router-dom';

import img from '../../assets/hero.svg';

import Sign from './components/Sign';

function Landing() {
  const [signIsOpen, setSignIsOpen] = useState(false);

  return (
    <>
      { signIsOpen && <Sign close={setSignIsOpen} />}
      <Container>
        <Left>
          <Hero>
            <h3>Lorem Ipsum & GuiaCompass. </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
              Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
          </p>
            <span>Não possui uma conta? <b>Cadastre-se aqui</b></span>
            <img src={img} />
          </Hero>
        </Left>

        <Right>
          <Form>
            <h3>Log In</h3>

            <InputGroup>
              <span>Usuário</span>
              <input type='text' />
            </InputGroup>

            <InputGroup>
              <span>Senha</span>
              <input type='password' />
            </InputGroup>

            <Link className="button" to={'panel'}>Entrar</Link>

            <a href="#" onClick={() => setSignIsOpen(true)}>Não possui uma conta?</a>
          </Form>
        </Right>
      </Container>
    </>
  );
}

export default Landing;