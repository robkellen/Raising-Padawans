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
}) {
  //define styles
  const classes = usePostCardStyles();

  //destructure properties needed for data utlized in this component
  // const {
  //   image,
  //   title,
  //   slug,
  //   createdAt,
  //   adventureCategory,
  //   booksCategory,
  //   craftsCategory,
  //   momLifeCategory,
  // } = props;

  //format timestamp into reader-friendly date
  let publishDate = new Date(createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //build on url to create link to PostDetail page
  const { url } = useRouteMatch();

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
              {momLifeCategory === true ? (
                <Grid item>
                  <Link to={`blog/mom-life`} className={classes.tagLink}>
                    <Typography gutterBottom variant="button" display="block">
                      Mom-Life
                    </Typography>
                  </Link>
                </Grid>
              ) : null}
              {adventureCategory === true ? (
                <Grid item>
                  <Link to={`blog/adventures`} className={classes.tagLink}>
                    <Typography gutterBottom variant="button" display="block">
                      Adventures
                    </Typography>
                  </Link>
                </Grid>
              ) : null}
              {booksCategory === true ? (
                <Grid item>
                  <Link to={`blog/books`} className={classes.tagLink}>
                    <Typography gutterBottom variant="button" display="block">
                      Books
                    </Typography>
                  </Link>
                </Grid>
              ) : null}
              {craftsCategory === true ? (
                <Grid item>
                  <Link to={`blog/crafts`} className={classes.tagLink}>
                    <Typography gutterBottom variant="button" display="block">
                      Crafts
                    </Typography>
                  </Link>
                </Grid>
              ) : null}
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
