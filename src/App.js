import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route path="/post/:slug" component={PostDetail} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
