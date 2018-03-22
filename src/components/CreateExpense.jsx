import React, { Component } from "react";

class CreateExpense extends Component {
    render() {
        return (
            <div>
                <label>
                    Name:
                    <input type="text" value={this.props.name} onChange={(e) => this.props.expenseNameChanged(e.target.value)} name="expenseName"/>
                </label>
                <label>
                    Date:
                    <input type="date" value={this.props.date} onChange={(e) => this.props.expenseDateChanged(e.target.value)} name="expenseDate"/>
                </label>
                <label>
                    Amount:
                    <input type="number" value={this.props.amount} onChange={(e) => this.props.expenseAmountChanged(e.target.value)} name="expenseAmount"/>
                </label>
                <label>
                    Category:
                    <input type="text" value={this.props.category} onChange={(e) => this.props.expenseCategoryChanged(e.target.value)} name="expenseCategory"/>
                </label>
                <br />
                {JSON.stringify(this.props)}
                <button onClick={this.props.createExpense}>Create Expense</button>
            </div>
        )
    }
}

export default CreateExpense;