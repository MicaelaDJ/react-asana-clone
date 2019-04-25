import React from "react";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import Error404 from './Error404';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" render={Homepage} />
        <Route exact path="/about" render={About} />
        <Route component={Error404}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
