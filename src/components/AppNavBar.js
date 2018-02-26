import React from 'react';
import PropTypes from 'prop-types';
import './AppNavBar.css';

const AppNavBar = (props) => {
    return (
        <div className="nav-bar-title">
            <span>React, Redux, and Apollo 2</span>
        </div>
    )
}

AppNavBar.propTypes = {
    navRoutes: PropTypes.array
};

export default AppNavBar;