import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: center;
  align-items: center;

  > model-viewer {
    width: 45rem;
    height: 45rem;
  }
`;
