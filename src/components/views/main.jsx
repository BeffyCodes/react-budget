import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import NewBudgetForm from './newBudgetForm';
import Budget from '../Budget';

class Main extends Component {
    
    state = {
        budgetName: '' || "Test Budget",
        monthlyIncome: 0 || 3000,
        topLimit: 0 || 1500,
        currency: 'usd'
    };

    genericOnTextChange = (inputName, inputValue) => {
        var newState = {};

        newState[inputName] = inputValue;

        this.setState(newState);
    }

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/newBudget' render={(props) => {
                        return <NewBudgetForm
                            genericOnTextChange={this.genericOnTextChange}
                            budgetName={this.state.budgetName}
                            monthlyIncome={this.state.monthlyIncome}
                            topLimit={this.state.topLimit} />
                    }} />
                    {<Route exact path='/budget' render={() => {
                        return <Budget
                            name={this.state.budgetName}
                            monthlyIncome={this.state.monthlyIncome}
                            topLimit={this.state.topLimit}
                            currency={this.state.currency}
                        />
                    }} />}
                </Switch>
            </main>
        )
    }
}

export default Main;