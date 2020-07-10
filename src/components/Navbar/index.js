import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';
import logo from '../../img/PORTFOLIO_LOGO.png';

import { Navbar } from 'react-bulma-components';

export default function Navigation() {
    return (
        <Navbar style={styles.navbar}>
            <div className='logo-div'>
                <Link to='/'>
                    <img src={logo} alt='brand' width='200'/>
                </Link>
            </div>
            <div className='navbar-end'>
                <div className='navbar-item'>
                    <Link to='/about'>
                        About
                    </Link>
                </div>
                <div className='navbar-item'>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </div>
                <div className='navbar-item'>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </div>
            </div>
        </Navbar>
    );

};
