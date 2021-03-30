import React from "react";
import Box from "@material-ui/core/Box";

function ContentPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <React.Fragment>{children}</React.Fragment>
        </Box>
      )}
    </div>
  );
}

export default ContentPanel;
