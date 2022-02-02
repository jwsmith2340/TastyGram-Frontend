// IMPORT useEFFECT/useSTATE
import { useEffect, useState } from "react";
// IMPORT ROUTE/SWITCH
import { Route, Switch, Redirect } from "react-router-dom";
// IMPORT PAGES
import About from "../pages/About";
import Home from "../pages/Home";
import Show from "../pages/Show";
import Edit from "../pages/Edit";
import New from "../pages/New";
import Dashboard from "../pages/Dashboard"
import DashboardHeader from "./DashboardHeader/DashboardHeader";

const Main = (props) => {
  // SET useSTATE
  const [ foods , setFood ] = useState(null);

  // IMPORT BACKEND URL
  const URL = "https://tastiergram.herokuapp.com/recipes/api/";
  

  // FETCH FOOD FROM BACKEND
  const getFood = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setFood(data);
  };

  // CREATE FOOD
  const createFood = async (eachFood) => {
    // make post request to create food
    if(!props.user) return; // do not run anycode in this function if there's no user
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(eachFood),
    });
    // update list of food
    getFood();
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

  // DELETE FOOD
  const deleteFoods = async (id) => {
    // make delete request to delete foodById
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of food
    getFood();
  }

  useEffect(() => getFood(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Home foods={ foods } />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/food/:id" render={(rf) => 
          (<Show 
            user={props.user}
            foods={foods}
            {...rf} />)} />
        <Route path="/food/edit/:id" render={(rf) => 
          (
            props.user ?
              <Edit
                foods={foods}
                updateFoods={updateFoods}
                deleteFoods={deleteFoods}
                {...rf} />
              :
              <Redirect to="/" />
          )}
          />
          <Route path="/newfood" render={(rf) => 
            (
            props.user ?
            <New 
              createFood={createFood}
              user={props.user} 
              {...rf} />
            :
            <Redirect to="/" />
            
            )}
          />

          <Route path="/dashboard">
            <DashboardHeader user={props.user}/>
            <Dashboard 
              user={props.user}
              foods={foods}
            />
          </Route>

      </Switch>
    </main>
  )
};

export default Main;