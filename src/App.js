import React from "react";
import "./App.css";
import { About, Classes, Footer, Header, Notice, Schedule } from "./containers";
import { Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Notice />
      <About />
      <Classes />
      <Schedule />
      <Footer />
    </div>
  );
};

export default App;
