// IMPORT ROUTE/SWITCH
import { Route, Switch } from "react-router-dom";
// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// IMPORT PAGES
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import New from "./pages/New";
import './App.scss'


function App() {
  // INPUT BACKEND HEROKU URL WHEN AVAILABLE
  // const URL = "";
  //comment here for funnzies


  return (
    <div className="App">
      <Header />

      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/food/:id">
          <Show />
        </Route>
        <Route path="/food/edit/:id">
          <Edit />
        </Route>
        <Route path="/newfood">
          <New />
        </Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
