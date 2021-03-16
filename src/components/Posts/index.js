import gql from "graphql-tag";

const POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      description
      createdAt
      image {
        id
        url
      }
      slug
    }
  }
`;
export default POSTS_QUERY;
