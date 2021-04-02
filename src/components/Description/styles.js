import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid var(--border-color);
  display: grid;
  grid-template-columns: 50fr 50fr;
  height: 70rem;
`;

export const Left = styled.div`
  background: #5B738F;
  display: flex;
  align-items: center;

  > p {
    font-size: 1.8rem;
    padding: 2rem;
    color: #fff;
    width: 47.5rem;
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

export const Image = styled.div`
  height: 37rem;
  width: 57.5rem;
  border: 5px solid #fff;
  position: absolute;
  left: -10rem;
  background: url('https://images.wallpaperscraft.com/image/sofa_pillows_room_190832_1280x720.jpg');
  background-size: cover;
  background-position: center;
`