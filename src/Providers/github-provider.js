import React, { createContext, useCallback, useState } from "react";
import getBaseUrl from "../Services/getBaseUrl";

export const githubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

function GithubProvider({ children }) {
  const [githubState, setGithubstate] = useState({
    hasUser: false,
    loading: false,
    user: {
      avatar: undefined,
      login: undefined,
      name: undefined,
      htmlUrl: undefined,
      blog: undefined,
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
    setGithubstate((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    getBaseUrl
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubstate((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            htmlUrl: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            publicGists: data.public_gists,
            publicRepos: data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubstate((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
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
