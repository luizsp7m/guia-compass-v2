import styled from 'styled-components';

export const Container = styled.div`
  background: #6C63FF;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 65fr 35fr;
  font-family: 'Nunito', sans-serif;

  @media(max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media(max-width: 768px) {
    display: none;
  }
`
export const Hero = styled.div`
  color: #f0f0f5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;

  > h3 {
    font-size: 2.5rem;
  }

  > p {
    font-size: 1.7rem;
    max-width: 50rem;
    margin: 2rem 0;
    font-weight: 500;
    line-height: 2.5rem;
  }

  > span {
    font-size: 1.65rem;
    font-weight: 300;

    > b {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  > img {
    width: 100%;
    max-width: 50rem;
    height: auto;
    margin-top: 2rem;
  }

  @media(max-width: 980px) {
    align-items: center;

    > p {
      text-align: center;
    }
  }
`


export const Right = styled.div`
  background: #f0f0f5;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.div`
  background: #fff;
  padding: 4.5rem 4rem;
  border-radius: .5rem;
  border: 1px solid #E5E5E5;
  display: flex;
  flex-direction: column;

  > h3 {
    color: #7C99A7;
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  > .button, button {
    background: #4CD137;
    width: 100%;
    border: 0;
    outline: 0;
    height: 4.5rem;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    font-weight: 500;
    font-size: 1.4rem;
    cursor: pointer;
    transition: background .1s;
    border-radius: .5rem;
    margin-top: .5rem;
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
      background: #5bc948;
      text-decoration: none;
    }
  }

  > a {
    color: #007fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.25rem;

  > span {
    color: #8FA7B2;
    font-size: 1.625rem;
    margin-bottom: .75rem;
  }

  > input {
    width: 28.5rem;
    height: 4rem;
    border: 1px solid #e5e5e5;
    background: #F5F8FA;
    border-radius: .5rem;
    outline: 0;
    color: #8FA7B2;
    padding: 0 1.3rem;
    font-size: 1.45rem;
  }
`