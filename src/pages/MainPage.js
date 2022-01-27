import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import RepoDetails from "../common/components/RepoDetails";
import NOAButton from "../common/elements/NOAButton";
import NOATypography, { variants } from "../common/elements/NOATypography";
import data from "../common/utils/data.json";
import {
  handleDecrement,
  handleIncrement,
} from "../common/utils/helperFunctions";

const useStyles = createUseStyles({
  counterContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    "@media screen and (max-width: 600px)": {
      flexDirection: "column",
    },
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
      <RepoDetails counter={counter} />
    </div>
  );
}
