import React from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <img src="logo192.png" alt="logo"/>
            <div>
                <h1>Drink Match</h1>
                <h3>Your personal online bartender.</h3>
                <Link to="/main">
                    <button type="button">
                        Click Me!
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;