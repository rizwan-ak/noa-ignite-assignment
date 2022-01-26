import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import RepoDetails from "../components/RepoDetails";
import NOAButton from "../elements/NOAButton";
import NOATypography, { variants } from "../elements/NOATypography";
import data from "../utils/data.json";
import { handleDecrement, handleIncrement } from "../utils/helperFunctions";

const useStyles = createUseStyles({
  counterContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default function MainPage() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className={classes.counterContainer}>
        <NOAButton
          value={data.DECButtonText}
          variant="decrement"
          onClick={() => handleDecrement(counter, setCounter)}
        />
        <NOATypography
          value={`${data.counterText} ${counter}`}
          variant={variants.title}
        />
        <NOAButton
          value={data.INCButtonText}
          variant="increment"
          onClick={() => handleIncrement(counter, setCounter)}
        />
      </div>
      <RepoDetails />
    </div>
  );
}
