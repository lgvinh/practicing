import styled from 'styled-components';

import { Box } from '../components/Box';
import { CenterDiv } from '../components/CenterDiv';
import { FlexContainer } from '../components/FlexContainer';
import { PaperButton } from '../components/PaperButton';
import { Pointer } from '../components/Pointer';

const MessageBrokerContainer = styled.div`
  transition: all 700ms ease 0s;
  // transform: rotate(40deg);
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
