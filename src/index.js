import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { graphcmsKey } from "./utils/_graphcmsKey";
import { createBrowserHistory } from "history";
import { ApolloProvider } from "@apollo/client/react";

const history = createBrowserHistory();

//connect Apollo Client to graphCMS API
const client = new ApolloClient({
  uri: graphcmsKey,
  cache: new InMemoryCache(),
  fetch,
});

// client
//   .query({
//     query: gql`
//       {
//         postsConnection(first: 6, orderBy: createdAt_DESC) {
//           edges {
//             cursor
//             node {
//               id
//               title
//               createdAt
//               image {
//                 id
//                 url
//               }
//               slug
//               craftsCategory
//               momLifeCategory
//               adventureCategory
//               booksCategory
//             }
//           }
//           pageInfo {
//             hasNextPage
//             hasPreviousPage
//             startCursor
//             endCursor
//             pageSize
//           }
//           aggregate {
//             count
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

const routes = (
  <ApolloProvider client={client}>
    <Router history={history}>
      <Switch>
        <Route path="/blog" component={App} />
        <Redirect from="/" to="/blog" />
      </Switch>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(
  <React.StrictMode>{routes}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
