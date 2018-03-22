import React, { Component } from "react";
import { Link } from 'react-router-dom';

class NewBudgetForm extends Component {

    render() {
        return (
            <div>
                <label>
                    New Budget Name:
                    <input name="budgetName" value={this.props.budgetName} onChange={(e) => this.props.genericOnTextChange(e.target.name, e.target.value)} type="text" />
                </label>
                <br />
                <label>
                    Monthly Income (Can be changed later):
                    <input name="monthlyIncome" value={this.props.monthlyIncome} onChange={(e) => this.props.genericOnTextChange(e.target.name, e.target.value)} type="number" />
                </label>
                <br />
                <label>
                    Budget Top Limit (If different from income):
                    <input name="topLimit" value={this.props.topLimit} onChange={(e) => this.props.genericOnTextChange(e.target.name, e.target.value)} type="number" />
                </label>
                <br />
                <Link to='/budget'>
                <button>
                    Create Budget
                </button>
                </Link>
            </div>

        )
    }
}

export default NewBudgetForm;