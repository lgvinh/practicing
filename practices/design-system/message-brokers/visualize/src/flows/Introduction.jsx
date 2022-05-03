import { components } from '@lib/react-packages';

const {
  Title,
  Description,
  SubTitle,
  FlexContainer,
  Container
} = components;

export const Introduction = () => {
  return (
    <Container
      minHeight={500}
    >
      <Title fontSize={50}>
        Message Broker Visualize
      </Title>
      <FlexContainer>
        <Container width={'49%'}>
          <SubTitle fontSize={40}>
            Tiếng Việt
          </SubTitle>
          <Description>
            Xin chào, đây sẽ một bài viết về "Message Broker"
          </Description>
        </Container>
        <Container width={'49%'}>
          <SubTitle fontSize={40}>
            English
          </SubTitle>
          <Description>
            Hello, this will be a post about "Message Broker"
          </Description>
        </Container>
      </FlexContainer>
    </Container>
  );
};
