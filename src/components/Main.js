// IMPORT ROUTE/SWITCH
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Show from "../pages/Show";
import Edit from "../pages/Edit";
import New from "../pages/New";

const Main = (props) => {
  return (
    <main>
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
    </main>
  )
};

export default Main;