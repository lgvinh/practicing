import { useState } from 'react';
import { notification } from 'antd';
import styled from 'styled-components';
import { components } from '@lib/react-packages';

import {
  delay
} from '../utils/functions';

const {
  Box,
  CenterDiv,
  FlexContainer,
  PaperButton,
  Pointer,
  Message,
  Container
} = components;

const NormalFlowContainer = styled.div`
  position: relative;
`;

export const NormalFlow = () => {
  const [isActive, setIsActive] = useState(false);

  const openNotification = async () => {
    if (isActive) {
      return;
    }

    setIsActive(true);
    await delay(2);
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
      <NormalFlowContainer>
        <Message
          isActive={isActive}
          haveMessageBroker={false}
        />
        <FlexContainer>
          <Box
            bgColor='black'
            color='white'
          >
            Service A
          </Box>
          <Pointer />
          <Box
            bgColor='green'
            color='white'
          >
            Service B
          </Box>
        </FlexContainer>
        <CenterDiv marginTop={100}>
          <PaperButton onClick={openNotification}>
            See actions
          </PaperButton>
        </CenterDiv>
      </NormalFlowContainer>
    </Container>
  );
};
