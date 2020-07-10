import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styles from './Navbar.css';
import logo from '../../img/PORTFOLIO_LOGO.png';

import { Navbar } from 'react-bulma-components';

export default function Navigation() {
    return (
        <Navbar style={styles.navbar}>
            <div className='logo-div'>
                <a href="https://github.com/egrenegar/egrenegar.github.io">
                    <img src={logo} alt='brand' width='200'/>
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <Link to="/about">
                        About
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link to="/projects">
                        Projects
                    </Link>
                </div>
                <div className="navbar-item">
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        </Navbar>
    );

};
