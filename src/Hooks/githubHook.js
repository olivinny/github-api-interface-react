import { useContext } from "react";
import { githubContext } from "../Providers/github-provider";
function GithubHook() {
  const { githubState } = useContext(githubContext);

  return { githubState };
}

export default GithubHook;
