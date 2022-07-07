import React from "react";
import { ResetCss } from "./Components/Global/resetCSS";
import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <main>
      <ResetCss />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
