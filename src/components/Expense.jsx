import React, { Component } from "react";

class Expense extends Component {
    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.date}</li>
                <li>{parseFloat(this.props.amount).toLocaleString(undefined,{style: 'currency', currencyDisplay: 'symbol', currency: this.props.currency})}</li>
                <li>{this.props.category}</li>
            </ul>

        )
    }
}

export default Expense;