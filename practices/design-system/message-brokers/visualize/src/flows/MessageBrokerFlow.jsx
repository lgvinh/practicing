import { useState } from 'react';
import { notification } from 'antd';
import styled from 'styled-components';

import { components } from '@lib/react-packages';

import { delay } from '../utils/functions';

const {
  Box,
  CenterDiv,
  FlexContainer,
  PaperButton,
  Pointer,
  Message,
  Container
} = components;

const MessageBrokerContainer = styled.div``;

const MessageBrokerFlowContainer = styled.div`
  position: relative;
`;

export const MessageBrokerFlow = () => {
  const [isActive, setIsActive] = useState(false);

  const openNotification = async () => {
    if (isActive) {
      return;
    }

    setIsActive(true);
    await delay(4);
    const args = {
      message: 'Success',
      description:
        'Sent message successfully',
      duration: 3,
    };
    notification.open(args);
  };

  return (
    <Container
      minHeight={500}
    >
      <MessageBrokerFlowContainer>
        <Message
          isActive={isActive}
          haveMessageBroker={true}
        />
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
              bgColor='purple'
              color='white'
            >
              Message Broker
            </Box>
            <Pointer />
            <Box
              bgColor='green'
              color='white'
            >
              Service B
            </Box>
          </FlexContainer>
        </MessageBrokerContainer>
        <CenterDiv marginTop={100}>
          <PaperButton onClick={openNotification}>
            See actions
          </PaperButton>
        </CenterDiv>
      </MessageBrokerFlowContainer>
    </Container>
  );
};
