import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  title: {
    fontWeight: "bold",
    // color: ({ theme }) => theme.fonts.secondary,
  },
});

export default function NOATypography({ value, variant }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <p className={classes[variant]}>{value}</p>;
}

export const variants = {
  title: "title",
};
