import React from "react";
import { ResetCss } from "./Global/resetCSS";
import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";
import GithubProvider from "./Providers/github-provider";
import Repositorie from "./Components/Repositories/Repositories";

function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <Layout>
          <Profile />
          <Repositorie />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
