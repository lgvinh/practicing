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
  Message
} = components;

const MessageBrokerErrorContainer = styled.div``;

const MessageBrokerErrorFlowContainer = styled.div`
  position: relative;
`;

export const MessageBrokerErrorFlow = () => {
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
    <MessageBrokerErrorFlowContainer>
      <Message
        isActive={isActive}
        haveMessageBroker={true}
      />
      <MessageBrokerErrorContainer>
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
            bgColor='red'
            color='white'
          >
            Service B
          </Box>
        </FlexContainer>
      </MessageBrokerErrorContainer>
      <CenterDiv marginTop={100}>
        <PaperButton onClick={openNotification}>
          See actions
        </PaperButton>
      </CenterDiv>
    </MessageBrokerErrorFlowContainer>
  );
};
