import { useState } from "react";
import { components } from '@lib/react-packages';

import {
  Introduction,
  NormalFlow,
  NormalErrorFlow,
  MessageBrokerFlow,
  MessageBrokerErrorFlow
} from "./flows";

const {
  CenterDiv,
  PaperButton
} = components;

const flows = [
  <Introduction />,
  <NormalFlow />,
  <NormalErrorFlow />,
  <MessageBrokerFlow />,
  <MessageBrokerErrorFlow />
];

const App = () => {
  const [currentFlow, setCurrentFlow] = useState(0);

  const setNextFlow = () => {
    setCurrentFlow(
      (flow) => flow < flows.length - 1 ? currentFlow + 1 : 0
    )
  };

  const setPreviousFlow = () => {
    setCurrentFlow(
      (flow) => flow > 0 ? currentFlow - 1 : flows.length - 1
    )
  };

  return (
    <>
      {flows[currentFlow]}
      <CenterDiv marginTop={30}>
        <PaperButton
          onClick={setPreviousFlow}
          margin={'10px'}
        >
          Previous
        </PaperButton>
        <PaperButton
          onClick={setNextFlow}
          margin={'10px'}
        >
          Next
        </PaperButton>
      </CenterDiv>
    </>
  );
};

export default App;
