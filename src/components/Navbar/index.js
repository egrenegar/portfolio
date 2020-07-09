import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styles from './navbar.css';
import logo from '../../img/PORTFOLIO_LOGO.png';

import { Navbar } from 'react-bulma-components';

function Navigation() {
    return (
        <Navbar style={styles.navbar}>
            <div className='logo-div'>
                <a href="https://github.com/egrenegar/egrenegar.github.io">
                    <img src={logo} alt='brand' width='200'/>
                </a>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <a>
                        About
                    </a>
                </div>
                <div className="navbar-item">
                    <a>
                        Projects
                    </a>
                </div>
                <div className="navbar-item">
                    <a>
                        Contact
                    </a>
                </div>
            </div>
        </Navbar>
    );

}

export default Navigation;
