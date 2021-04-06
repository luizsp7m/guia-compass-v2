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

  > div.user {
    display: flex;
    align-items: center;
    position: relative;

    > img {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      object-fit: cover;
    }

    > div.username {
      margin-left: 1.25rem;
      cursor: pointer;
      display: flex;
      align-items: center;

      > span {
        color: #fafafa;
        font-weight: 600;
        font-size: 1.45rem;
        margin-right: .5rem;
      }
    }

    > div.dropdown {
      position: absolute;
      top: 5rem;
      background: #736cfc;
      width: 25rem;

      /* > div.dropdown-item + div.dropdown-item {
        margin: 1rem 0;
      } */

      > div.dropdown-item {
        margin-top: 1rem;

        > h3 {
          font-size: 1.45rem;
          padding: 0 1rem;
          color: #fafafa;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        > div.option {
          display: flex;
          align-items: center;
          padding: 1.25rem 1rem;

          &:hover {
            cursor: pointer;
            background: rgba(0,0,0,.1);
          }

          > span {
            color: #fafafa;
            font-size: 1.25rem;
            margin-left: .85rem;
          }
        }
      }
    }
  }
`;