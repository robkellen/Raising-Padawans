import React from "react";
import useDividerStyles from "./DividerStyles";

const Divider = ({ children }) => {
  const classes = useDividerStyles();
  return (
   <div className={classes.container}>
     <div className={classes.border} />
     <span className={classes.content}>{children}</span>
     <div className={classes.border} />
   </div>
  );
 };
 export default Divider;