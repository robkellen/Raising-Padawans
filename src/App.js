import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing.js";
import BooksTabContent from "./components/BlogContent/BooksTabContent/BooksTabContent";
// import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/books" component={BooksTabContent} />
          {/* <Route path="/post/:slug" component={PostDetail} /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
