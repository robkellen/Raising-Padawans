import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphcmsKey } from "./utils/_graphcmsKey";
import { ApolloProvider } from "@apollo/client/react";
import { relayStylePagination } from "@apollo/client/utilities";
import theme from "../src/utils/theme";

const history = createBrowserHistory();

//connect Apollo Client to graphCMS API
const client = new ApolloClient({
  uri: graphcmsKey,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          postsConnection: relayStylePagination(),
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
    <ThemeProvider theme={theme}>
      <React.StrictMode>{routes}</React.StrictMode>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
