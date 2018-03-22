import React, { Component } from "react";

class Expense extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.date}</li>
                <li>{this.props.amount}</li>
                <li>{this.props.category}</li>
            </ul>

        )
    }
}

export default Expense;