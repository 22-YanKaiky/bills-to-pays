import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/accounts" component={Accounts} />
                <Route path="/expenses" component={Expenses} />
                <Route path="/revenues" component={Revenues} />
            </Switch>
        </Router>
    )
}