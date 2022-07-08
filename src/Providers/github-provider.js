import React, { createContext, useCallback, useState } from "react";
import getBaseUrl from "../Services/api";

export const githubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

function GithubProvider({ children }) {
  const [githubState, setGithubstate] = useState({
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      htmlUrl: undefined,
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
    getUser: useCallback((username) => getUser(username), []),
  };

  function getUser(username) {
    getBaseUrl.get(`users/${username}`).then(({ data: { user } }) => {
      setGithubstate((prevState) => ({
        ...prevState,
        user: {
          login: user.login,
          name: user.name,
          htmlUrl: user.htmlUrl,
          company: user.company,
          location: user.location,
          followers: user.followers,
          following: user.following,
          publicGists: user.publicGists,
          publicRepos: user.publicRepos,
        },
      }));
    });
  }

  return (
    <githubContext.Provider value={contextValue}>
      {children}
    </githubContext.Provider>
  );
}

export default GithubProvider;
