import React, { Component } from "react";

class NewBudgetForm extends Component {
    state = {
        budgetName: '',
        monthlyIncome: 0,
        topLimit: 0
    };

    // onBudgetNameChange(budgetName) {
    //     this.setState({
    //         budgetName: budgetName
    //     });
    // }

    genericOnTextChange(inputName, inputValue) {
        var newState = {};

        newState[inputName] = inputValue;

        this.setState(newState);
    }

    render() {
        return (
            <div>
                <label>
                    New Budget Name:
                    <input name="budgetName" value={this.state.budgetName} onChange={(e) => this.genericOnTextChange(e.target.name, e.target.value)} type="text" />
                </label>
                <br />
                <label>
                    Monthly Income (Can be changed later):
                    <input name="monthlyIncome" value={this.state.monthlyIncome} onChange={(e) => this.genericOnTextChange(e.target.name, e.target.value)} type="number" />
                </label>
                <br />
                <label>
                    Budget Top Limit (If different from income):
                    <input name="topLimit" value={this.state.topLimit} onChange={(e) => this.genericOnTextChange(e.target.name, e.target.value)} type="number" />
                </label>
                <br />
                {JSON.stringify(this.state)}
            </div>

        )
    }
}

export default NewBudgetForm;