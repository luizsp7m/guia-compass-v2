import React, { useState } from 'react';

import { Container, Navbar } from './styles';

import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';
import { HiUserAdd } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa';

const imgURL = "https://images.wallpaperscraft.com/image/garland_light_bulbs_lights_202907_1280x720.jpg";

function Header() {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  return (
    <Container>
      <Navbar>
        <h4>GuiaCompass.</h4>

        <div className="user">
          <img src={imgURL} alt="img" />
          <div className="username" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
            <span>Luizinho Móveis</span>
            <IoIosArrowDown color={'#fafafa'} size={16} style={dropdownIsOpen ? {
              transform: 'rotate(180deg)',
              transition: '.5s',
            } :{
              transition: '.5s',
            }}/>
          </div>

          {dropdownIsOpen && (
            <div className="dropdown">
              <div className="dropdown-item">
                <h3>Configurações</h3>

                <div className="option">
                  <BsFillGearFill size={14} color={'#fafafa'} />
                  <span>Configurações da conta</span>
                </div>

                <div className="option">
                  <HiUserAdd size={14} color={'#fafafa'} />
                  <span>Adicionar funcionário</span>
                </div>

                <div className="option">
                  <FaSignOutAlt size={14} color={'#fafafa'} />
                  <span>Sair</span>
                </div>
              </div>

              <div className="dropdown-item">
                <h3>Conteúdo</h3>

                <div className="option">
                  <FaUserAlt size={13} color={'#fafafa'} />
                  <span>Ver perfil</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <Link to={'landing'}>Sair</Link> */}
      </Navbar>
    </Container>
  );
}

export default Header;