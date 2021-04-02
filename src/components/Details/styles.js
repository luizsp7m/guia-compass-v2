import styled from 'styled-components';

export const Container = styled.div`
  padding: 10rem 4rem;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
  }

  > p {
    margin-top: 2rem;
    font-size: 1.6rem;
    text-align: center;
    color: #555;
  }
`