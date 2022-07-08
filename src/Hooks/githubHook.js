import { useContext } from "react";
import { githubContext } from "../Providers/github-provider";

function GithubHook() {
  const { githubState, getUser } = useContext(githubContext);

  return { githubState, getUser };
}

export default GithubHook;
