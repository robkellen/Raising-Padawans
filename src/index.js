import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphcmsKey } from "./utils/_graphcmsKey";
import { ApolloProvider } from "@apollo/client/react";
import { relayStylePagination } from "@apollo/client/utilities";

const history = createBrowserHistory();

//connect Apollo Client to graphCMS API
const client = new ApolloClient({
  uri: graphcmsKey,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            postsConnection: {
              keyArgs: false,
              merge(existing = [], incoming) {
                return [...existing];
              },
            },
          },
        },
      },
    },
  }),
});

const routes = (
  <Router history={history}>
    <Switch>
      <Route path="/blog" component={App} />
      <Redirect from="/" to="/blog" />
    </Switch>
  </Router>
);

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>{routes}</React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
