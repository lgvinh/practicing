import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  background-color: orange;
  width: 100px;
  height: 100px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  bottom: 20%;
  left: ${({ isActive }) =>  isActive ? '85%' : '112px' };

  @keyframes messageWithBrokerLeftToRight {
    0% {
      left: 112px;
    }
    40% {
      left: 45%
    }
    50% {
      left: 45%
    }
    100% {
      right: 85%;
    }
  }

  @keyframes messageLeftToRight {
    from {
      left: 112px;
    }
    to {
      left: 85%;
    }
  }

  ${
    ({ haveMessageBroker, isActive }) => haveMessageBroker
      ? `
        animation-duration: 4s;
        ${isActive ? 'animation-name: messageWithBrokerLeftToRight;' : ''}
      `
      : `
        animation-duration: 2s;
        ${isActive ? 'animation-name: messageLeftToRight;' : ''}
      `
  }
`;

export const Message = (props) => {
  return (
    <MessageContainer {...props}>
      message <br />
      {`{data}`}
    </MessageContainer>
  );
};
