import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div>
      <Switch>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
        {/* <Route path="/about">
          <About />
        </Route> */}

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        {/* <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route> */}

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route exact path ="/about">
          <About/>
        </Route>
        <Route exact path ="/skills">
          <Skills/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route component={NotFound}/> */}
      </Switch>
    </div>
  );
}

export default App;