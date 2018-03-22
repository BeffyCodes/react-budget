import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Expense from './Expense';

class Budget extends Component {
    state = {
        expenses: this.props.expenses || [
            {
                id: 1,
                name: "Test",
                date: "12/12/12",
                amount: "$50.00",
                category: "Dining"
            },
            {
                id: 2,
                name: "Test2",
                date: "10/11/15",
                amount: "$320.22",
                category: "Stuff"
            }
        ]
    }

    render() {
        
        const expensesToDisplay = this.state.expenses.map((expense) =>
        <Expense
            key={expense.id}
            name={expense.name}
            date={expense.date}
            amount={expense.amount}
            category={expense.category}
         />
    )
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>Spending limit per month: ${this.props.topLimit}</h3>
                <h3>Total income per month: ${this.props.monthlyIncome}</h3>
                {expensesToDisplay}
            </div>
        )
    }
}

export default Budget;