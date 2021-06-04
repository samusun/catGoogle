// import Header from "./Header";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Links from "./Links";
import Contact from "./Contact";
import SavedCats from "./SavedCats";
import catContext from "./catContext";
import { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [someCat, setSomeCat] = useState([]);
  return (
    <Router>
      <catContext.Provider value={{ someCat, setSomeCat }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About me</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <div>
              <Header />
              <Links />
              <SavedCats />
            </div>
          </Route>
          <Route path="/about">{About}</Route>
          <Route path="/contact">{Contact}</Route>
        </Switch>
      </catContext.Provider>
    </Router>
  );
}

export default App;
