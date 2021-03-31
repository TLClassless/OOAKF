import "./styles/App.css";

import styles from "./styles/Header.module.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Stream from "./components/home/streamContainer.js";
import BottomContainer from "./components/home/bottomContainer.js";

function App() {
  return (
    <div className={styles.test}>
      <Header />
      <Stream />
      <BottomContainer />
      <Footer />
    </div>
  );
}

export default App;
