import { request, gql } from "graphql-request";
//import graphCMS API key
import { graphcmsKey } from "../_graphcmsKey";

const allPostsQuery = gql`
  {
    postsConnection(first: 6, orderBy: createdAt_DESC) {
      edges {
        cursor
        node {
          id
          title
          createdAt
          image {
            id
            url
          }
          slug
          craftsCategory
          momLifeCategory
          adventureCategory
          booksCategory
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        pageSize
      }
      aggregate {
        count
      }
    }
  }
`;

const momLifePostsQuery = gql`
{
  postsConnection(where: {momLifeCategory: true}, first: 6, orderBy: createdAt_DESC) {
    edges {
      cursor
      node {
        id
        title
        createdAt
        image {
          id
          url
        }
        slug
        craftsCategory
        momLifeCategory
        adventureCategory
        booksCategory
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
    aggregate {
      count
    }
  }
}
`;

const adventuresPostQuery = gql`
{
  postsConnection(where: {adventureCategory: true}, first: 6, orderBy: createdAt_DESC) {
    edges {
      cursor
      node {
        id
        title
        createdAt
        image {
          id
          url
        }
        slug
        craftsCategory
        momLifeCategory
        adventureCategory
        booksCategory
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
    aggregate {
      count
    }
  }
}
`;

const booksPostQuery = gql`
{
  postsConnection(where: {booksCategory: true}, first: 6, orderBy: createdAt_DESC) {
    edges {
      cursor
      node {
        id
        title
        createdAt
        image {
          id
          url
        }
        slug
        craftsCategory
        momLifeCategory
        adventureCategory
        booksCategory
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
    aggregate {
      count
    }
  }
}
`;

const craftsPostQuery = gql`
{
  postsConnection(where: {craftsCategory: true}, first: 6, orderBy: createdAt_DESC) {
    edges {
      cursor
      node {
        id
        title
        createdAt
        image {
          id
          url
        }
        slug
        craftsCategory
        momLifeCategory
        adventureCategory
        booksCategory
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
      pageSize
    }
    aggregate {
      count
    }
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
