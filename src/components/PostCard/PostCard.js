import React from "react";
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

  return (
    <React.Fragment>
      <Card className={classes.root} square>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            alt={props.title}
          />
          <CardContent align="left">
            <Typography gutterBottom variant="h5" component="h5">
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}

export default PostCard;
