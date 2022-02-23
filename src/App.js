import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { createContext } from "react";
import styled from "styled-components";
import Home from "../src/pages/Home";
import Favorites from "../src/pages/Favorites";
import API from "./API";

export const Weather = createContext();
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/Favorites">
            Favorites
          </Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}
