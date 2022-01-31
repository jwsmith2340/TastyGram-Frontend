// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

import './App.scss'


function App() {

  return (
    <div className="App">
      <Header />

      <Main />
      
      <Footer className="footer-component"/>
    </div>
  );
}

export default App;
