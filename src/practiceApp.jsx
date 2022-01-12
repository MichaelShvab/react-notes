import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/test">
                <img
                  width="60px"
                  src="https://images.theconversation.com/files/290710/original/file-20190903-175663-lqb3z6.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                ></img>
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function returnHome() {
  return <Link to="/">Home</Link>;
}

function Home() {
  return <h2>Home</h2>;
}

function Test() {
  return (
    <div>
      <h2>Some Text</h2>
      <Link to="/">
        <button onClick={returnHome()}>Link</button>
      </Link>
    </div>
  );
}
