import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70fr 30fr;
`;

export const Panel = styled.div`
  padding: 4rem;
  display: grid;
  grid-template-columns: 15fr 85fr;
  border-right: 1px solid var(--border-color);
`

export const Image = styled.div`
  height: 80vh;
  background: url(${props => props.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 80vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
  }
`

export const Item = styled.div`
  min-width: 8rem;
  min-height: 8rem;
  background: url(${props => props.url});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: .95;
  border-radius: .5rem;
  border: 1px solid var(--border-color);
  margin-bottom: 1rem;
  transition: opacity .15s;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }

  &:last-child {
    margin-bottom: 0rem;
  }
`

export const Information = styled.div`
  padding: 4rem 3rem;

  > span.recomendation {
    color: #44bd32;
    font-size: 1.3rem;
  }

  > h3.name {
    color: #555;
    font-size: 1.55rem;
    margin-bottom: .65rem;
    margin-top: 1rem;
  }

  > span {
    font-size: 1.15rem;
    color: #aaa;
  }

  > div.dimensions {
    margin: 3rem 0;
    color: #555;

    > h4 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    > div.dimension {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      font-size: 1.2rem;

      > span {
        margin-left: .75rem;

        > b {
          margin-right: .5rem;
        }
      }
    }
  }
`