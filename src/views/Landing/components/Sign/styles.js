import styled from 'styled-components';

export const Container = styled.div`
  background: #f0f0f5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: 'Nunito', sans-serif;

  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    position: absolute;
    top: .5rem;
    right: .5rem;
    background: none;
    border: 0;
    outline: 0;
  }
`;
