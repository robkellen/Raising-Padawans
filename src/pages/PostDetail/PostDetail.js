import React, { useState, useEffect } from "react";
import request from "graphql-request";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Loading from "../../components/Loading/Loading";
import postDetailStyles from "./PostDetailStyles";

function PostDetail() {
  //define styles
  const classes = postDetailStyles();

  //set initial state
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    image: [],
    content: "",
  });

  //match route to selected post using the post's slug
  let { slug } = useParams();

  const fetchPost = async () => {
    try {
      const { post } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmccrd1544xl01z29ptafga9/master",
        `
      { 
        post (where: {slug: "${slug}"}) {
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
    `
      );

      setPost(post);

      return setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchPost();

    return post;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <Container className={classes.root}>
            <Grid container justify="center">
              <Grid className={classes.postTitle} item xs={12}>
                <h1>{post.title}</h1>
              </Grid>
              <img
                className={classes.mainPostImg}
                src={post.image.url}
                alt="test"
              />
              <Grid container justify="space-evenly" alignItems="flex-start">
                <Grid item xs={9} className={classes.postContent}>
                  <p dangerouslySetInnerHTML={{ __html: post.content.html }} />
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </React.Fragment>
      )}
    </>
  );
}

export default PostDetail;
