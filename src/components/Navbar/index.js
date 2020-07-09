import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import styles from './navbar.css';

import { Navbar } from 'react-bulma-components';

function Navigation() {
    return (
        <Navbar style={styles.navbar}>
            <div className="navbar-brand">
                <a className="navbar-item" href="https://github.com/egrenegar/egrenegar.github.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt='brand' width="112" height="28" />
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
                        Test
                    </a>
                </div>
            </div>
        </Navbar>
    );

}

export default Navigation;
