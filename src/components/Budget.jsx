import React, { Component } from "react";
//import { Link } from 'react-router-dom';
import Expense from './Expense';
import CreateExpense from './CreateExpense';

class Budget extends Component {
    state = {
        expenses: this.props.expenses || [
            {
                id: 1,
                name: "Test",
                date: "12/12/12",
                amount: 50,
                category: "Dining"
            },
            {
                id: 2,
                name: "Test2",
                date: "10/11/15",
                amount: 320.22,
                category: "Stuff"
            }
        ],
        showExpenseCreation: false,
        expenseToCreate: {
            name: "",
            date: "",
            amount: 0,
            category: ""
        },
        idCounter: 3
    }

    //region: Controlled Component functions for creating expense

    onCreateExpenseNameChange = (newName) => {
        this.setState((currentState) => ({
            expenseToCreate: {
                name: newName,
                date: currentState.expenseToCreate.date,
                amount: currentState.expenseToCreate.amount,
                category: currentState.expenseToCreate.category
            }
        }));
    }

    onCreateExpenseDateChange = (newDate) => {
        this.setState((currentState) => ({
            expenseToCreate: {
                name: currentState.expenseToCreate.name,
                date: newDate,
                amount: currentState.expenseToCreate.amount,
                category: currentState.expenseToCreate.category
            }
        }));
    }

    onCreateExpenseAmountChange = (newAmount) => {
        this.setState((currentState) => ({
            expenseToCreate: {
                name: currentState.expenseToCreate.name,
                date: currentState.expenseToCreate.date,
                amount: newAmount,
                category: currentState.expenseToCreate.category
            }
        }));
    }

    onCreateExpenseCategoryChange = (newCategory) => {
        this.setState((currentState) => ({
            expenseToCreate: {
                name: currentState.expenseToCreate.name,
                date: currentState.expenseToCreate.date,
                amount: currentState.expenseToCreate.amount,
                category: newCategory
            }
        }));
    }
    //endregion

    toggleExpenseCreation = () => {
        this.setState((currentState) => ({
            showExpenseCreation: !currentState.showExpenseCreation
        }));
    }

    createExpense = () => {
        this.toggleExpenseCreation();

        this.setState((currentState) => {
            currentState.expenseToCreate.id = currentState.idCounter;

            return {
                expenses: currentState.expenses.concat(currentState.expenseToCreate),
                idCounter: currentState.idCounter + 1,
                expenseToCreate: {
                    name: "",
                    date: "",
                    amount: 0,
                    category: ""
                }
            }
        });
    }


    render() {
        let totalExpenses = 0;
        const expensesToDisplay = this.state.expenses.map((expense) =>{
            totalExpenses += expense.amount;

            return <Expense
                key={expense.id}
                name={expense.name}
                date={expense.date}
                amount={expense.amount}
                category={expense.category}
                currency={this.props.currency}
            />
        })
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>Spending limit per month: ${this.props.topLimit}</h3>
                <h3>Total income per month: ${this.props.monthlyIncome}</h3>
                <h3>Total spent this month: ${totalExpenses}</h3>

                {this.state.showExpenseCreation &&
                    <CreateExpense
                        name={this.state.expenseToCreate.name}
                        date={this.state.expenseToCreate.date}
                        amount={this.state.expenseToCreate.amount}
                        category={this.state.expenseToCreate.category}
                        createExpense={this.createExpense}
                        expenseNameChanged={this.onCreateExpenseNameChange}
                        expenseDateChanged={this.onCreateExpenseDateChange}
                        expenseAmountChanged={this.onCreateExpenseAmountChange}
                        expenseCategoryChanged={this.onCreateExpenseCategoryChange}
                    />}
                {!this.state.showExpenseCreation && (
                    <button onClick={this.toggleExpenseCreation}>Create Expense</button>
                )}

                {expensesToDisplay}
            </div>
        )
    }
}

export default Budget;