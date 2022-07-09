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
      id: undefined,
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
            id: data.id,
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

  function getUserRepos(username) {
    getBaseUrl.get(`users/${username}/repos`).then(({ data }) => {
      setGithubstate((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  }
  function getUserStarred(username) {
    getBaseUrl.get(`users/${username}/starred`).then(({ data }) => {
      setGithubstate((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  }
  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <githubContext.Provider value={contextValue}>
      {children}
    </githubContext.Provider>
  );
}

export default GithubProvider;
