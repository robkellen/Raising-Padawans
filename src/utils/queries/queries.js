import { request, gql } from "graphql-request";
//import graphCMS API key 
import { graphcmsKey } from "../_graphcmsKey";

const allPostsQuery = gql`
  {
    posts {
      id
      title
      content {
        html
      }
      createdAt
      image {
        id
        url
      }
      slug
    }
  }
`;

const momLifePostsQuery = gql`
  {
    posts(where: { momLifeCategory: true }) {
      id
      title
      content {
        html
      }
      createdAt
      image {
        id
        url
      }
      slug
    }
  }
`;

const adventuresPostQuery = gql`
  {
    posts(where: { adventureCategory: true }) {
      id
      title
      content {
        html
      }
      createdAt
      image {
        id
        url
      }
      slug
    }
  }
`;

const booksPostQuery = gql`
  {
    posts(where: { booksCategory: true }) {
      id
      title
      content {
        html
      }
      createdAt
      image {
        id
        url
      }
      slug
    }
  }
`;

const craftsPostQuery = gql`
  {
    posts(where: { craftsCategory: true }) {
      id
      title
      content {
        html
      }
      createdAt
      image {
        id
        url
      }
      slug
    }
  }
`;

export function homeQuery() {
  return request(graphcmsKey, allPostsQuery);
}

export function momLifeQuery() {
  return request(graphcmsKey, momLifePostsQuery);
}

export function adventuresQuery() {
  return request(graphcmsKey, adventuresPostQuery);
}

export function booksQuery() {
  return request(graphcmsKey, booksPostQuery);
}

export function craftsQuery() {
  return request(graphcmsKey, craftsPostQuery);
}
