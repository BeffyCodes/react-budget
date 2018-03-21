import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Home extends Component {

    render() {
        return (
            <ul>
                <li><Link to='/newBudget'>New Budget</Link></li>
                <li><Link to='/'>Load Budget</Link></li>
            </ul>
        )
    }
}

export default Home;