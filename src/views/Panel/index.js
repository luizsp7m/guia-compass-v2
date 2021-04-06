import React, { useState, useLayoutEffect, useEffect } from 'react';

import { Container, Content, Grid, Products, Filter } from './styles';

import { AiOutlineSearch } from 'react-icons/ai';
import { BsFilterRight } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';

import Header from './componets/Header';
import Profile from './componets/Profile';
import Partners from './componets/Partners';
import Product from './componets/Product';

import data from '../../data/roupeiros.json';

const manufacturers = ['Henn', 'Henn', 'Henn', 'Henn', 'Henn', 'Henn', 'Henn', 'Henn']

function Panel() {
  const [toggled, setToggled] = useState(false);

  return (
    <Container>
      <Header />
      <Content>
        {/* <Profile /> */}
        <Partners />
        <Grid>
          <Products>
            <div className="search">
              <div className="input-group">
                <input placeholder="Digite aqui o nome do produto" />
                <button>
                  <AiOutlineSearch size={20} color={'#fafafa'} />
                </button>
              </div>

              <div className="search-filter">
                <span>5 resultados encontrados</span>

                <button onClick={() => setToggled(true)}>
                  <BsFilterRight size={24} color={'#8FA7B2'} />
                </button>
              </div>
            </div>

            <div className="grid-products">
              {
                data.map((product, index) => (
                  <Product data={product} key={index} />
                ))
              }
            </div>
          </Products>

          <Filter toggled={toggled}>
            <button className="close" onClick={() => setToggled(false)}>
              <MdClose size={26} color={'#EA2027'} />
            </button>

            <h3>Fabricante</h3>

            <div className="filter-content">
              {
                manufacturers.map((manufacturer, index) => (
                  <div className="filter-body" key={index}>
                    <input type="checkbox" id="fabricante" name="fabricante" />
                    <label>{manufacturer}</label>
                  </div>
                ))
              }
            </div>

            <button className="apply" onClick={() => setToggled(false)}>Aplicar</button>
          </Filter>
        </Grid>
      </Content>
    </Container>
  );
}

export default Panel;