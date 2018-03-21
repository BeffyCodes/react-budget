import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import NewBudgetForm from './newBudget';

class Main extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/newBudget' component={NewBudgetForm} />
                    {/* <Route exact path='/Page3' component={Page3} /> */}
                </Switch>
            </main>
        )
    }
}

export default Main;