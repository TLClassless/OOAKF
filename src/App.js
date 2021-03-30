import "./styles/App.css";

import styles from "./styles/Header.module.css";
import Header from "./components/header.js";
import Stream from "./components/home/streamContainer.js";

function App() {
  return (
    <div className={styles.test}>
      <Header />
      <Stream />
    </div>
  );
}

export default App;
