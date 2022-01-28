// IMPORT ROUTE/SWITCH
import { Route, Switch } from "react-router-dom";
// IMPORT COMPONENTS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// IMPORT PAGES
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
import New from "./pages/New";


function App() {
  // INPUT BACKEND HEROKU URL WHEN AVAILABLE
  // const URL = "";


  return (
    <div className="App">

      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/signup">
          <Header />
          <SignUp />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
        <Route exact path="/food/:id">
          <Header />
          <Show />
        </Route>
        <Route path="/food/edit/:id">
          <Header />
          <Edit />
        </Route>
        <Route path="/newfood">
          <Header />
          <New />
        </Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
