import { Box } from '../components/Box';
import { CenterDiv } from '../components/CenterDiv';
import { FlexContainer } from '../components/FlexContainer';
import { PaperButton } from '../components/PaperButton';
import { Pointer } from '../components/Pointer';

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
