import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  icon: {
    maxHeight: 15,
    marginRight: 5,
  },
  invertedIcon: {
    filter: "invert(100%)",
    maxHeight: 15,
    marginRight: 5,
  },
});

export default function NOAIcon({ src, shouldInvert }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <img
      src={src}
      alt={`${src}-icon`}
      className={shouldInvert ? classes.invertedIcon : classes.icon}
    />
  );
}
