import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={Homepage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
