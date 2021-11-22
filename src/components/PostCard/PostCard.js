import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import usePostCardStyles from "./PostCardStyles";

function PostCard({
  image,
  title,
  slug,
  createdAt,
  adventureCategory,
  booksCategory,
  craftsCategory,
  momLifeCategory,
  url,
}) {
  //define styles
  const classes = usePostCardStyles();

  //format timestamp into reader-friendly date
  let publishDate = new Date(createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //build on url to create link to PostDetail page
  // const { url } = useRouteMatch();

  // categories to map over and display if post is marked as part of that specific category
  const subLinks = [
    { category: momLifeCategory, path: "mom-life", text: "Mom-Life" },
    { category: adventureCategory, path: "adventures", text: "Adventures" },
    { category: booksCategory, path: "books", text: "Books" },
    { category: craftsCategory, path: "crafts", text: "Crafts" },
  ];

  return (
    <React.Fragment>
      <Card className={classes.root} square>
        <CardActionArea className={classes.cardAction}>
          <Link className={classes.cardLink} to={`${url}/${slug}`}>
            <CardMedia className={classes.media} image={image} alt={title} />
          </Link>
        </CardActionArea>
        <CardContent align="left">
          <CardActionArea
            classes={{
              root: classes.actionArea,
              focusHighlight: classes.focusHighlight,
            }}
          >
            <Grid container spacing={2}>
              {subLinks.map((subLink) =>
                subLink.category === true && url !== `/blog/${subLink.path}` ? (
                  <Grid item key={subLink.path}>
                    <Link
                      to={`/blog/${subLink.path}`}
                      className={classes.tagLink}
                    >
                      <Typography gutterBottom variant="button" display="block">
                        {subLink.text}
                      </Typography>
                    </Link>
                  </Grid>
                ) : null
              )}
            </Grid>
            <Link className={classes.title} to={`${url}/${slug}`}>
              <Grid item>
                <Typography gutterBottom variant="h5" component="h4" noWrap>
                  {title}
                </Typography>
              </Grid>
            </Link>
          </CardActionArea>
          <Typography
            variant="button"
            className={classes.tagLink}
            display="block"
          >
            {publishDate}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}

export default PostCard;
