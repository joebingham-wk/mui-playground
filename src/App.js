import Container from "@material-ui/core/Container";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MakeStylesExample from './make_styles/example_entrypoint';
import WithStylesExample from './with_styles/example_entrypoint';
import StyledExample from './styled/example_entrypoint';


function Home() {
    return (
      <Container>
          <Link to='/make_styles'><h3>Make Styles Example</h3></Link>
          <Link to='/with_styles'><h3>With Styles Example</h3></Link>
          <Link to='/styled'><h3>Styled Example</h3></Link>
      </Container>
    );
}

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route path="/make_styles">
                      <MakeStylesExample />
                  </Route>
                  <Route path="/with_styles">
                      <WithStylesExample />
                  </Route>
                  <Route path="/styled">
                      <StyledExample />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}


export default App;
