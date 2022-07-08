import React from "react";
import App from "./App";
import { ResetCss } from "./Global/resetCSS";
import GithubProvider from "./Providers/github-provider";

function Providers() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <App />
      </GithubProvider>
    </main>
  );
}

export default Providers;
