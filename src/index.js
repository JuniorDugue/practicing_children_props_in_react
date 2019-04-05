import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Layout = props => (
  <div>
    <header>My Header</header>
    <main>{props.children}</main>
    <main>{props.children}</main>
    <main>{props.children}</main>
  </div>
);

const Layout2 = props => (
  <div>
    <footer>{props.children}</footer>
  </div>
);

function App() {
  return (
    <div>
      <Layout>
        <p>page section is here</p>
      </Layout>
      <Layout2>
        <p>Copyright 2019</p>
      </Layout2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
