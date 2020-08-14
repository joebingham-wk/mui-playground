import React from "react";

import ContainerWrapper from "./container";
import {
  BoxWrapper,
  NoPropsBoxWrapper,
  FunctionStylesBoxWrapper,
  FunctionStylesNoBoxWrapper,
  OptionsBoxWrapper,
} from "./box";

function App() {
  return (
    <React.Fragment>
      <ContainerWrapper>
        <BoxWrapper color={"blue"} />
        <NoPropsBoxWrapper />
        <FunctionStylesBoxWrapper height={100} width={100} />
        <FunctionStylesNoBoxWrapper />
      </ContainerWrapper>
      <ContainerWrapper color={"papayawhip"}>
        <OptionsBoxWrapper>Let's throw some children in here</OptionsBoxWrapper>
      </ContainerWrapper>
    </React.Fragment>
  );
}

export default App;
