import React from "react";
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontWeight: 500,
    fontSize: 12,
  },
  error: {
    color: ({ theme }) => theme.colors.primaryOnHover,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

export default function NOATypography({ value, variant }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <p className={classes[variant]}>{value}</p>;
}

export const variants = {
  title: "title",
  subTitle: "subTitle",
  description: "description",
  error: "error",
};
