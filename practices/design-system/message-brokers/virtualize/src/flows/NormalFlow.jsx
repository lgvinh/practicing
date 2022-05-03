import { components } from '@lib/react-packages';

const {
  Box,
  CenterDiv,
  FlexContainer,
  PaperButton,
  Pointer
} = components;

export const NormalFlow = () => {
  return (
    <>
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
          Service B
        </Box>
      </FlexContainer>
      <CenterDiv marginTop={100}>
        <PaperButton>
          See actions
        </PaperButton>
      </CenterDiv>
    </>
  );
};
