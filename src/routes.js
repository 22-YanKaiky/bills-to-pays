import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </Router>
    )
}