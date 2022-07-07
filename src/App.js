import React from "react";
import { ResetCss } from "./Components/Global/resetCSS";
import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";
import Repositories from "./Components/Repositories";

function App() {
  return (
    <main>
      <ResetCss />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </main>
  );
}

export default App;
