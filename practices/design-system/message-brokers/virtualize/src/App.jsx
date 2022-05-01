import { useMemo, useState } from "react";
import {
  components
} from "@lib/react-components";
import { NormalFlow } from "./flows/NormalFlow";
import { MessageBrokerFlow } from "./flows/MessageBrokerFlow";

const {
  CenterDiv,
  PaperButton
} = components;

const flows = ['NormalFlow', 'MessageBrokerFlow'];

const App = () => {
  const [currentFlow, setCurrentFlow] = useState('NormalFlow');
  
  const currentPage = useMemo(() => {
    switch (currentFlow) {
      case 'NormalFlow':
        return <NormalFlow />
      case 'MessageBrokerFlow':
        return <MessageBrokerFlow />
      default:
        break;
    }
  }, [currentFlow]);

  const setCurrentPage = () => {
    const currentIndex = flows.findIndex(flow => flow === currentFlow);

    if (currentIndex < flows.length - 1) {
      return setCurrentFlow(flows[currentIndex + 1]);
    }

    return setCurrentFlow(flows[0]);
  };

  return (
    <>
    {currentPage}
    <CenterDiv marginTop={30}>
      <PaperButton onClick={setCurrentPage}>
        Next
      </PaperButton>
    </CenterDiv>
    </>
  );
};

export default App;
