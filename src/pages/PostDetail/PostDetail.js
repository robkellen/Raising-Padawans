import React, { useState, useEffect } from "react";
import request from "graphql-request";
import { useParams, useRouteMatch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import FacebookIcon from "@material-ui/icons/Facebook";
import Grid from "@material-ui/core/Grid";
import Loading from "../../components/Loading/Loading";
import Divider from "../../components/Divider/Divider";
import usePostDetailStyles from "./PostDetailStyles";

function PostDetail() {
  //define styles
  const classes = usePostDetailStyles();

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
    let componentMounted = true;
    if (componentMounted) {
      setLoading(true);

      fetchPost();
    }

    return () => (componentMounted = false);

    // eslint-disable-next-line
  }, []);

  //get url from useRouteMatch to use in social media button links
  const { url } = useRouteMatch();

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <React.Fragment>
          <div className={classes.root}>
            <Container className={classes.container}>
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
                    <p
                      dangerouslySetInnerHTML={{ __html: post.content.html }}
                    />
                  </Grid>
                </Grid>
                <Grid container justify="center">
                  <Divider>Share</Divider>
                </Grid>
                <Grid item className={classes.socialMediaShareBtn}>
                  <a
                    href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                    className="twitter-share-button"
                    data-show-count="false"
                  >
                    <TwitterIcon fontSize="large" color="secondary" />
                  </a>
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                  ></script>
                </Grid>
                <Grid item className={classes.socialMediaShareBtn}>
                  {/* TO DO: Make sure this functions once site is deployed.  Will not link correctly on local server */}
                  <a
                    className="facebook"
                    href={`https://www.facebook.com/sharer.php?u=https://${url}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <FacebookIcon fontSize="large" color="secondary" />
                  </a>
                </Grid>
                <Grid item className={classes.socialMediaShareBtn}>
                  <a
                    className="pinterest"
                    href={`https://pinterest.com/pin/create/button/?url=https://${url}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on Pinterest"
                  >
                    <PinterestIcon fontSize="large" color="secondary" />
                  </a>
                </Grid>
              </Grid>
            </Container>
          </div>
        </React.Fragment>
      )}
    </>
  );
}

export default PostDetail;
