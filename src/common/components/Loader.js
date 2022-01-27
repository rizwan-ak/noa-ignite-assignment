import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { icons } from "../assets/assets";

const useStyles = createUseStyles({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    top: 0,
    left: 0,
  },

  loadingImage: {
    height: "30vh",
    animation: "spin 6s linear infinite",
  },
});

export default function Loader() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <div className={classes.loadingContainer}>
      <img
        src={icons.increment}
        alt="loading"
        className={classes.loadingImage}
      />
    </div>
  );
}
