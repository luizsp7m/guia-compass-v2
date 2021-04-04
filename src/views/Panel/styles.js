import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Nunito', sans-serif;
`;

export const Content = styled.div`
  width: 95%;
  max-width: 115rem;
  margin: 5rem auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 80fr 20fr;
  gap: 2rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Products = styled.div`
  > div.search {
    display: flex;
    flex-direction: column;

    > div.input-group {
      display: flex;
      
      > input {
        height: 5rem;
        width: calc(100% - 5rem);
        border: 1px solid #E5E5E5;
        border-top-left-radius: .5rem;
        border-bottom-left-radius: .5rem;
        outline: 0;
        padding: 0 2rem;
        color: #8FA7B2;
        font-size: 1.4rem;

        ::placeholder {
          color: #8FA7B2;
          font-size: 1.25rem;
        }
      }

      > button {
        background: #4CD137;
        border: 0;
        outline: 0;
        height: 5rem;
        width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-right-radius: .5rem;
        border-bottom-right-radius: .5rem;
        transition: background .1s;

        &:hover {
          cursor: pointer;
          background: #5bc948;
        }
      }
    }

    > span {
        font-size: 1.4rem;
        color: #8FA7B2;
        padding: 1.25rem .1rem;
      }

    > div.search-filter {
      padding: 1.25rem .1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > span {
        font-size: 1.4rem;
        color: #8FA7B2;
      }

      > button {
        display: none;
      }

      @media(max-width: 768px) {
        > button {
          background: #fafafa;
          padding: .5rem;
          border-radius: .5rem;
          border: 1px solid #E5E5E5;
          outline: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }

  > div.grid-products {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(23rem, 1fr));
    gap: 1.25rem;

    @media(max-width: 660px) {
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }
  }
`

export const Filter = styled.div`
  background: #fafafa;
  border: 1px solid #E5E5E5;
  border-radius: .5rem;
  padding: 2rem;

  > button {
    display: none;
  }

  > h3 {
    font-weight: bold;
    font-size: 1.35rem;
    color: #7C99A7;
  }

  > div.filter-content {
    margin: 1rem 0;

    > div.filter-body {
      display: flex;
      align-items: center;
      margin: .85rem 0;

      > input {
        -moz-opacity: .4;
        -webkit-opacity: .4;
        opacity: .4;

        &:checked {
          -moz-opacity: 1;
          -webkit-opacity: 1;
          opacity: 1;
        }
      }

      > label {
        font-size: 1.25rem;
        margin-left: 1rem;
        color: #7C99A7;
      }
    }
  }

  ${props => {
    if(props.toggled) {
      return `
        @media(max-width: 768px) {
          position: fixed;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          border: 0;
          padding: 5rem;
          border-radius: 0;
          z-index: 5;

          > button {
            display: block;
          }

          > h3 {
            font-size: 2.75rem;
          }

          > div.filter-content {
            margin: 4rem 0;

            > div.filter-body {
              > label {
                font-size: 2rem;
              }
            }
          }

          > button.apply {
            width: 100%;
            height: 6rem;
            border: 0;
            background: #44BD32;
            color: #fafafa;
            font-weight: 600;
            border-radius: .5rem;
            outline: 0;
          }

          > button.close {
            position: absolute;
            top: 2rem;
            right: 2rem;
            font-size: 0;
            border: 0;
            background: 0;
            height: 4rem;
            width: 4rem;
            outline: 0;
          }
        }
      `
    } else {
      return `
      `
    }
  }}
`