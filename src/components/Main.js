// IMPORT useEFFECT/useSTATE
import { useEffect, useState } from "react";
// IMPORT ROUTE/SWITCH
import { Route, Switch } from "react-router-dom";
// IMPORT PAGES
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Show from "../pages/Show";
import Edit from "../pages/Edit";
import New from "../pages/New";

const Main = (props) => {
  // SET useSTATE
  const [ foods , setFood ] = useState(null);

  // IMPORT BACKEND URL
  const URL = "https://tastygram.herokuapp.com/recipes/api/";

  // FETCH FOOD FROM BACKEND
  const getFood = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFood(data);
  };

  // UPDATE FOOD
  const updateFoods = async (eachFood, id) => {
    //make PUT request to update people
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(eachFood),
    });
    // update list of food
    getFood();
  };

  useEffect(() => getFood(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home foods={ foods }/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/food/:id" render={(rf) => 
          (<Show 
            foods={foods}
            {...rf} />)} />
        <Route path="/food/edit/:id" render={(rf) => 
          (<Edit 
            foods={foods}
            updateFoods={updateFoods}
            {...rf}/>)} />
        <Route path="/newfood">
          <New />
        </Route>
      </Switch>
    </main>
  )
};

export default Main;