import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './pages/Login' 
import Register from "./pages/Login/Register";
import Home from "./pages/Home";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Router>
    )
}
