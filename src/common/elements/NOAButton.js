import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { icons } from "../assets/assets";
import NOAIcon from "./NOAIcon";

const useStyles = createUseStyles({
  incButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: ({ theme }) => theme.colors.primary,
    border: "none",
    borderRadius: 25,
    padding: "15px 20px",
    cursor: "pointer",
    color: ({ theme }) => theme.fonts.secondary,
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: ({ theme }) => theme.colors.primaryOnHover,
    },
  },
  decButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: ({ theme }) => theme.colors.secondary,
    boxShadow: `inset 0px 0px 0px 2px black`,
    border: "none",
    borderRadius: 25,
    padding: "15px 20px",
    cursor: "pointer",
    color: ({ theme }) => theme.fonts.primary,
    fontWeight: "bold",
    "&:hover": {
      color: ({ theme }) => theme.fonts.secondary,
      backgroundColor: ({ theme }) => theme.colors.secondaryOnHover,
    },
  },
});

export default function NOAButton({ value, variant, onClick }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [shouldInvert, setShouldInvert] = useState(variant === "increment");

  const handleMouseOverOnDecButton = () => {
    variant === "decrement" && setShouldInvert(true);
  };

  const handleMouseOutOnDecButton = () => {
    variant === "decrement" && setShouldInvert(false);
  };

  return (
    <button
      className={
        variant === "increment" ? classes.incButton : classes.decButton
      }
      onMouseOver={handleMouseOverOnDecButton}
      onMouseOut={handleMouseOutOnDecButton}
      onClick={onClick}
    >
      {variant && (
        <NOAIcon
          src={variant === "increment" ? icons.increment : icons.decrement}
          shouldInvert={shouldInvert}
        />
      )}
      {value}
    </button>
  );
}
