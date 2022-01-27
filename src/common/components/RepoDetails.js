import React, { useEffect, useState } from "react";
import { createUseStyles, useTheme } from "react-jss";
import NOATypography, { variants } from "../elements/NOATypography";
import { fetchRepo } from "../utils/api";
import data from "../utils/data.json";
import Loader from "./Loader";

const useStyles = createUseStyles({
  repoDetailsContainer: {
    padding: 20,
  },
});

export default function RepoDetails({ counter }) {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [repoDetails, setRepoDetails] = useState("");
  const [caughtError, setCaughtError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchRepo(data.repos[counter], setCaughtError, setIsLoading, (repo) => {
      setRepoDetails(repo);
    });
  }, [counter]);

  return (
    <div className={classes.repoDetailsContainer}>
      {caughtError ? (
        <NOATypography value={`${data.errorText}`} variant={variants.error} />
      ) : (
        <>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <NOATypography
                value={`${repoDetails?.full_name}`}
                variant={variants.title}
              />
              <NOATypography
                value={`${data.repoDetails.stars} ${repoDetails?.stargazers_count}`}
                variant={variants.subTitle}
              />
              <NOATypography
                value={`${data.repoDetails.description} ${repoDetails?.description}`}
                variant={variants.description}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
