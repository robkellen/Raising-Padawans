import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import postCardStyles from "./PostCardStyles";

function PostCard(props) {
  //define styles
  const classes = postCardStyles();

  //destructure properties needed for data utlized in this component
  const {image, title, slug, createdAt} = props;

  //format timestamp into reader-friendly date
  let publishDate = new Date(createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  //build on url to create link to PostDetail page
  let {  path } = useRouteMatch();

  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={1}>
        <CardActionArea className={classes.cardAction}>
          <Card className={classes.root} square>
            <Link className={classes.cardLink} to={`${path}/${slug}`}>
              <CardMedia
                className={classes.media}
                image={image}
                alt={title}
              />
              <CardContent align="left">
                <Typography gutterBottom variant="h5" component="h4">
                  {title}
                </Typography>
                <Typography gutterBottom variant="button" display="block">
                  {publishDate}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        </CardActionArea>
      </Paper>
    </React.Fragment>
  );
}

export default PostCard;
