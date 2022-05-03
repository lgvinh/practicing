import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ display }) => display || 'block'};
  width: ${({ width }) => width || '100%'};
  ${
    ({ minHeight }) => minHeight
      ? `min-height: ${minHeight}px`
      : ''
  }
`;
