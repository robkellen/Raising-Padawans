import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import postCardStyles from "./PostCardStyles";

function PostCard(props) {
  //pass post details as props
  // const { post } = props;

  //define styles
  const classes = postCardStyles();

  //format timestamp into reader-friendly date
  let publishDate = new Date(props.createdAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })  

  //build on url to create link to PostDetail page
  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <Card className={classes.root} square>
        <CardActionArea>
          <Link className={classes.cardLink} to={`${url}/${props.slug}`}>
            <CardMedia
              className={classes.media}
              image={props.image}
              alt={props.title}
            />
            <CardContent align="left">
              <Typography gutterBottom variant="h3" component="h3">
                {props.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h5">
                {publishDate}
              </Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

export default PostCard;
