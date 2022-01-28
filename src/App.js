// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

import './App.scss'


function App() {
  // INPUT BACKEND HEROKU URL WHEN AVAILABLE
  // const URL = "";
  //comment here for funnzies


  return (
    <div className="App">
      <Header />

      <Main />
      
      <Footer />
    </div>
  );
}

export default App;
