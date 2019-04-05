import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Header = props => (
  <>
    <header>My Header</header>
  </>
);

const Layout = props => (
  <div>
    <section>{props.children}</section>
    <section>{props.children}</section>
    <section>{props.children}</section>
  </div>
);

const Layout2 = props => (
  <div>
    <footer>{props.children}</footer>
  </div>
);

const Layout3 = props => (
  <>
    <section />
  </>
);

function App() {
  return (
    <div>
      <Header />
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
