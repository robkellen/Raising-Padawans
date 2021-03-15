import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
