import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Project/Project";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 780) {
      setIsMobile(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
      
       {isMobile ? (
          <div>
            <Home />
            <About />
            <Project />
            <Contact />
          </div>
        ) : (
          <div>
            <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project" component={Project} />
              <Route path="/contact" component={Contact} />
              <Route path="/portfolio" component={Home}/>
            </Switch>
          </div>
        )}
          {/* <ScrollToTop />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
          </Switch>   */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
