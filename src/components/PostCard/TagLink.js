import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import postCardStyles from "./PostCardStyles";

function TagLink(props) {
  //define styles
  const classes = postCardStyles();

  const {
    adventuresCategory,
    booksCategory,
    craftsCategory,
    momLifeCategory,
    url,
  } = props;

  if (momLifeCategory === true && url !== "/blog/mom-life") {
    return (
      <Link to={`blog/mom-life`} className={classes.tagLink}>
        <Typography gutterBottom variant="button" display="block">
          Mom-Life
        </Typography>
      </Link>
    );
  } else if (adventuresCategory === true && url !=="/blog/adventures") {
    return (
      <Link to={`blog/adventures`} className={classes.tagLink}>
        <Typography gutterBottom variant="button" display="block">
          Adventures
        </Typography>
      </Link>
    );
  } else if (booksCategory === true && url !== "/blog/books") {
    return (
      <Link to={`blog/books`} className={classes.tagLink}>
        <Typography gutterBottom variant="button" display="block">
          Books
        </Typography>
      </Link>
    );
  } else if (craftsCategory === true && url !== "/blog/crafts") {
    return (
      <Link to={`blog/crafts`} className={classes.tagLink}>
        <Typography gutterBottom variant="button" display="block">
          Crafts
        </Typography>
      </Link>
    );
  } else {
    return null;
  }
}

export default TagLink;
