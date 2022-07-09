import { useContext } from "react";
import { githubContext } from "../Providers/github-provider";

function GithubHook() {
  const { githubState, getUser, getUserRepos, getUserStarred } =
    useContext(githubContext);

  return { githubState, getUser, getUserRepos, getUserStarred };
}

export default GithubHook;
