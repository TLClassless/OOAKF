import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import styles from "./styles/Header.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Stream from "./components/home/streamContainer.js";
import BottomContainer from "./components/home/bottomContainer.js";
import About from "./components/about/about.js";

function App() {
  return (
    <div className={styles.test}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Stream />
            <BottomContainer />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
