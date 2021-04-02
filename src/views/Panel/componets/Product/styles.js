import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .5rem;
  border: 1px solid #E5E5E5;
  background: #fff;
  overflow: hidden;

  > img {
    margin: 2rem;
    width: 100%;
    max-width: 20rem;
    height: 20rem;
    object-fit: contain;
    align-self: center;
    transition: .3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  > div.productInformation {
    color: #7C99A7;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;

    > p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.4rem;
      font-weight: 600;
      margin-bottom: .5rem;
    }

    > span {
      font-size: 1.3rem;
      font-weight: 800;
    }

    @media(max-width: 625px) {
      align-items: center;
    }
  }

  > div.options {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    border-top: 1px solid #e5e5e5;
    padding: 1.25rem;

    > a + a {
      margin-left: 1.5rem;
      border-left: 1px solid #e5e5e5;
      padding-left: 1.5rem;
    }

    > a {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 1.35rem;
      font-weight: 600;
      color: #8FA7B2;

      &:hover {
        text-decoration: underline;
      }

      > span {
        margin-left: .5rem;
      }
    }
  }
`;
