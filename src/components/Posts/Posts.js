import React from "react";
import { useRouteMatch } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {
  ALL_POSTS,
  MOM_LIFE_POSTS,
  ADVENTURES_POSTS,
  BOOKS_POSTS,
  CRAFTS_POSTS,
} from "../../utils/queries/queries";
import PostCard from "../PostCard/PostCard";
import Loading from "../Loading/Loading";

import { useQuery } from "@apollo/client";

function Posts() {
  //match url to determine which db query to utilize in getUrl()
  let { url } = useRouteMatch();

  //match url to update content with corresponding query
  const getUrl = () => {
    switch (url) {
      case "/blog/mom-life":
        return MOM_LIFE_POSTS;
      case "/blog/adventures":
        return ADVENTURES_POSTS;
      case "/blog/books":
        return BOOKS_POSTS;
      case "/blog/crafts":
        return CRAFTS_POSTS;
      default:
        return ALL_POSTS;
    }
  };

  //set up functionality to change page # in url based on pagination button selected.
  let search = window.location.search;
  let params = new URLSearchParams(search);

  //defining how many posts to show per page
  const itemsPerLoad = 6;

  //useQuery hook gets all posts and postsConnection data on page load
  const { error, data, fetchMore, networkStatus } = useQuery(getUrl(), {
    fetchPolicy: "cache-and-network",
    variables: { first: itemsPerLoad },
    notifyOnNetworkStatusChange: true,
  });

  //if useQuery hook is loading return loading spinner
  if (networkStatus === 1) return <Loading />;
  if (error) return `Error! ${error.message}`;

  const hasNextPage = data.posts.pageInfo.hasNextPage;
  const isRefetching = networkStatus === 3;

  console.log(data.posts);

  return (
    <>
      {data.posts.edges.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.node.id}>
          <PostCard
            id={post.node.id}
            image={post.node.image.url}
            title={post.node.title}
            slug={post.node.slug}
            createdAt={post.node.createdAt}
            momLifeCategory={post.node.momLifeCategory}
            adventuresCategory={post.node.adventuresCategory}
            booksCategory={post.node.booksCategory}
            craftsCategory={post.node.craftsCategory}
          />
        </Grid>
      ))}
      <Grid container justify="center">
        <Grid item>
          <Box>
            {hasNextPage && (
              <IconButton
                title="More Posts"
                aria-label="more posts"
                disabled={isRefetching}
                onClick={() =>
                  fetchMore({
                    variables: {
                      first: itemsPerLoad,
                      after: data.posts.pageInfo.endCursor,
                    },
                  })
                }
              >
                <ChevronRightIcon />
              </IconButton>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Posts;
