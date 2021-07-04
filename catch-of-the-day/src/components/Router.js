import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StorePicker}></Route>
        <Route exact path='/store/:storeId' component={App}></Route>
        <Route exact component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
