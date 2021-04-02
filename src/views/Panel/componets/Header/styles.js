import styled from 'styled-components';

export const Container = styled.div`
  background-color: #6C63FF;
`;

export const Navbar = styled.div`
  width: 95%;
  max-width: 115rem;
  margin: 0 auto;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h4 {
    font-weight: bold;
    font-size: 2rem;
    color: #fafafa;
  }

  > a {
    font-size: 1.5rem;
    color: #eaeaea;
    text-decoration: none;

    &:hover {
      color: #dbd6d6;
    }
  }
`;