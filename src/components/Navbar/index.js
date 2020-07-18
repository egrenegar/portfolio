import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.css';
import logo from '../../img/PORTFOLIO_LOGO.png';

import { Navbar } from 'react-bulma-components';

const handleMenu = () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
}

export default function Navigation() {

    return (
        <Navbar style={styles.navbar}>
            <div className='navbar-brand'>
                <Link to='/'>
                    <img src={logo} alt='brand' width='200' />
                </Link>

                <Link
                    role='button'
                    className='navbar-burger burger'
                    aria-label='menu'
                    aria-expanded='false'
                    onClick={handleMenu}
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </Link>
            </div>
           
            <div className='navbar-menu'>
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
            </div>
            
        </Navbar>
    );

};
