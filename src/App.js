// IMPORT COMPONENTS
import { useState, useEffect } from "react";
import { auth } from "./services/firebase";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

import './App.scss'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user));
  }, []);
  return (
    <div className="App">
      <Header user={user} />

      <Main user={user} />
      
      <Footer className="footer-component"/>
    </div>
  );
}

export default App;
