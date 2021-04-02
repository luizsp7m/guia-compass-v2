import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Background = styled.div`
  background-image: url('https://images.wallpaperscraft.com/image/paint_liquid_bubbles_202149_1280x720.jpg');
  height: 18.5rem;
  background-position: center;
  background-size: cover;
  position: relative;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;

  > div.settings {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, .35);
    display: flex;
    padding: 1rem;
    border-radius: .5rem;

    > div.row:first-child {
      padding-right: 1.5rem;
      margin-right: 1.5rem;
      border-right: 1px solid rgba(250, 250, 250, 0.25);
    }

    > div.row {
      display: flex;
      align-items: center;

      &:hover {
        cursor: pointer;

        > span {
          color: #dbd6d6;
        }
      }

      > span {
        color: #fafafa;
        font-size: 1.4rem;
        margin-left: 1rem;
      }
    }
  }

  @media(max-width: 425px) {
    > div.settings {
      > div.row {
        > span {
          display: none;
        }
      }
    }
  }
`;

export const Bottom = styled.div`
  height: 11.5rem;
  background: #fafafa;
  border-bottom-left-radius: .5rem;
  border-bottom-right-radius: .5rem;
  position: relative;

  > div.image-profile {
    > img {
      height: 15rem;
      width: 15rem;
      border-radius: 50%;
      border: 5px solid #fafafa;
      background: #fafafa;
      position: absolute;
      top: -8rem;
      left: 2.5rem;
    }
  }
`;