import gql from "graphql-tag";

export const ALL_POSTS = gql`
  query posts(
    $first: Int
    $last: Int
    $skip: Int
    $before: String
    $after: String
  ) {
    posts: postsConnection(
      first: $first
      last: $last
      skip: $skip
      before: $before
      after: $after
      orderBy: createdAt_DESC
    ) {
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

export const MOM_LIFE_POSTS = gql`
  query posts(
    $first: Int
    $last: Int
    $skip: Int
    $before: String
    $after: String
  ) {
    posts: postsConnection(
      where: { momLifeCategory: true }
      first: $first
      last: $last
      skip: $skip
      before: $before
      after: $after
      orderBy: createdAt_DESC
    ) {
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

export const ADVENTURES_POSTS = gql`
  query posts(
    $first: Int
    $last: Int
    $skip: Int
    $before: String
    $after: String
  ) {
    posts: postsConnection(
      where: { adventureCategory: true }
      first: $first
      last: $last
      skip: $skip
      before: $before
      after: $after
      orderBy: createdAt_DESC
    ) {
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

export const BOOKS_POSTS = gql`
  query posts(
    $first: Int
    $last: Int
    $skip: Int
    $before: String
    $after: String
  ) {
    posts: postsConnection(
      first: $first
      last: $last
      skip: $skip
      before: $before
      after: $after
      orderBy: createdAt_DESC
    ) {
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

export const CRAFTS_POSTS = gql`
  query posts(
    $first: Int
    $last: Int
    $skip: Int
    $before: String
    $after: String
  ) {
    posts: postsConnection(
      where: { craftsCategory: true }
      first: $first
      last: $last
      skip: $skip
      before: $before
      after: $after
      orderBy: createdAt_DESC
    ) {
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

export const SINGLE_POST = gql`
  query post($slug: String) {
    post(where: { slug: $slug }) {
      id
      title
      content {
        html
      }
      createdAt
      image {
        url
      }
      slug
      craftsCategory
      momLifeCategory
      adventureCategory
      booksCategory
    }
  }
`;
