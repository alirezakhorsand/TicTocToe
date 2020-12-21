import React from "react";
import { Toolbar } from "@material-ui/core";
import NavBar from "./Navbar";
import Game from "./game";

const App = () => {
  return (
    <div>
      <NavBar />
      <Toolbar />
      <Game />
    </div>
  );
};

export default App;