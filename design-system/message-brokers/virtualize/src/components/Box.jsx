import styled from 'styled-components';

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${props => props.bgColor || '#000000'};
  color: ${props => props.color || '#ffffff'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  font-weight: bold;
  margin: 10px;
  text-align: center;
`;

export {
  Box
};
