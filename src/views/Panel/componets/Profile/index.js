import React from 'react';

import { Container, Background, Bottom } from './styles';

import { BiPencil } from 'react-icons/bi';
import { MdWallpaper } from 'react-icons/md';

import imageProfile from '../../../../assets/profile.png';

function Profile() {
  return (
    <Container>
      <Background>
        <div className="settings">
          <div className="row">
            <BiPencil size={20} color={'white'} />
            <span>Editar perfil</span>
          </div>

          <div className="row">
            <MdWallpaper size={20} color={'white'} />
            <span>Foto de fundo</span>
          </div>
        </div>
      </Background>

      <Bottom>
        <div className="image-profile">
          <img src={imageProfile} alt={'Profile'} />
          <MdWallpaper
            size={26}
            color={'#ccc'}
            className="icon"
            style={{
              position: 'absolute',
              left: '15rem',
              top: '1rem',
              cursor: 'pointer'
            }}
          />
        </div>
      </Bottom>
    </Container>
  );
}

export default Profile;