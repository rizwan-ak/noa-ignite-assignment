import React, { useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import NOATypography, { variants } from "../elements/NOATypography";

const useStyles = createUseStyles({
  counterContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default function RepoDetails() {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NOATypography value={`sssss`} variant={variants.title} />
    </div>
  );
}
