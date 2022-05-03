import { useState } from "react";
import { components } from '@lib/react-packages';

import {
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

  return (
    <>
      {flows[currentFlow]}
      <CenterDiv marginTop={30}>
        <PaperButton onClick={setNextFlow}>
          Next
        </PaperButton>
      </CenterDiv>
    </>
  );
};

export default App;
