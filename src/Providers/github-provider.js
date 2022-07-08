import React, { createContext, useState } from "react";

export const githubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

function GithubProvider({ children }) {
  const [githubState, setGithubstate] = useState({
    user: {
      login: undefined,
      name: "Vinicius Oliveira",
      publicUrl: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0,
    },
    repositories: [],
    starred: [],
  });
  const contextValue = {
    githubState,
  };
  return (
    <githubContext.Provider value={contextValue}>
      {children}
    </githubContext.Provider>
  );
}

export default GithubProvider;
