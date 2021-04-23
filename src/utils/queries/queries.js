import { request, gql } from "graphql-request";

//define graphCMS API key from .env
const GRAPHCMS_KEY = process.env.REACT_APP_GRAPHCMS_KEY;

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
        url(
          transformation: {
            image: { resize: { height: 240, width: 345, fit: max } }
          }
        )
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
  return request(GRAPHCMS_KEY, allPostsQuery);
}

export function momLifeQuery() {
  return request(GRAPHCMS_KEY, momLifePostsQuery);
}

export function adventuresQuery() {
  return request(GRAPHCMS_KEY, adventuresPostQuery);
}

export function booksQuery() {
  return request(GRAPHCMS_KEY, booksPostQuery);
}

export function craftsQuery() {
  return request(GRAPHCMS_KEY, craftsPostQuery);
}
