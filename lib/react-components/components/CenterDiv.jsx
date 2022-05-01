import styled from 'styled-components';

export const CenterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.marginTop + 'px' || '10px'}
`;
