import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "graphql-request";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppNav from "../components/AppNav/AppNav";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(5, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Landing() {
  //defining classes and theme
  const classes = useStyles();

  //setting state of posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmccrd1544xl01z29ptafga9/master",
        `
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
    `
      );

      setPosts(posts);
      console.log(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNav />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          {!posts.length ? (
            <h2>Loading Posts...</h2>
          ) : (
            <div>
              {posts.map(({ title, id, image, content, slug }) => (
                <article key={id}>
                  <h2>{title}</h2>
                  {/* <img src={image.url} alt="blog post" /> */}
                  <p dangerouslySetInnerHTML={{ __html: content.html }} />
                  <Link to={`/post/${slug}`}>
                    <button className="btn">{title}</button>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Landing;
