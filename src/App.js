import React from "react";

import Layout from "./Components/Layout/Layout";
import NoSearch from "./Components/no-search/NoSearch";
import Profile from "./Components/Profile/Profile";
import Repositorie from "./Components/Repositories/Repositories";
import GithubHook from "./Hooks/githubHook";

function App() {
  const { githubState } = GithubHook();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositorie />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;
