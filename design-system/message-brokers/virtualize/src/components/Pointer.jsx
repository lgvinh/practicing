import styled from 'styled-components';
import { Arrow } from './Arrow';

const PointerBody = styled.div`
  width: 150px;
  height: 70px;
  background-color: green;
`;

const PointerContainer = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
`

export const Pointer = () => {
  return (
    <PointerContainer>
      <PointerBody />
      <Arrow />
    </PointerContainer>
  )
};
