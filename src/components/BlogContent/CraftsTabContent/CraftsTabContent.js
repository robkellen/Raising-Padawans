import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "graphql-request";
import Grid from "@material-ui/core/Grid";
import HeroImage from "../../HeroImage/HeroImage";
import Container from "@material-ui/core/Container";

function CraftsTabContent() {
  //setting state of posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { posts } = await request(
        "https://api-us-west-2.graphcms.com/v2/ckmccrd1544xl01z29ptafga9/master",
        `
      { 
        posts (where: {craftsCategory: true}){
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
    };

    fetchPosts();
  }, []);

  return (
    <React.Fragment>
      <Grid>
        <Grid item xs={12}>
          <HeroImage />
        </Grid>

        <Container >
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
        </Container>
      </Grid>
    </React.Fragment>
  );
}

export default CraftsTabContent;
