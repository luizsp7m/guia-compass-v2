import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem 0;
  border: 1px solid #E5E5E5;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: .5rem;
  background: #fafafa;

  > h4 {
    font-weight: bold;
    font-size: 1.35rem;
    color: #7C99A7;
  }

  > div {
    margin-top: 2rem;
    display: flex;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 0;
    }

    > img {
      width: 100%;
      max-width: 13.2rem;
      margin: 0 1rem;
    }

    
  }
`;
