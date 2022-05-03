import styled from 'styled-components';

import { components } from '@lib/react-packages';

const {
  Box,
  CenterDiv,
  FlexContainer,
  PaperButton,
  Pointer
} = components;

const MessageBrokerContainer = styled.div`
  transition: all 700ms ease 0s;
`

export const MessageBrokerFlow = () => {
  return (
    <>
      <MessageBrokerContainer>
        <FlexContainer>
          <Box
            bgColor='black'
            color='white'
          >
            Service A
          </Box>
          <Pointer />
          <Box
            bgColor='black'
            color='white'
          >
            Message Broker
          </Box>
          <Pointer />
          <Box
            bgColor='black'
            color='white'
          >
            Service B
          </Box>
        </FlexContainer>
      </MessageBrokerContainer>
      <CenterDiv marginTop={100}>
        <PaperButton>
          See actions
        </PaperButton>
      </CenterDiv>
    </>
  );
};
