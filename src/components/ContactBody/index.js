import React, { Fragment } from 'react';
import { Columns } from 'react-bulma-components';
import './ContactBody.css';

export default function ContactBody() {
    return(
        <Fragment>
            <Columns>
                <Columns.Column className='has-text-centered contact-text'>
                    <p>egrenegar@gmail.com</p>
                </Columns.Column>
            </Columns>
            <Columns>
                <Columns.Column className='has-text-centered'>
                    <span><a href='https://github.com/egrenegar' rel='noopener noreferrer' target='_blank' className='icon'><i className="fab fa-github fa-2x"></i></a></span>
                </Columns.Column>
            </Columns>
            <Columns>
                <Columns.Column className='has-text-centered'>
                    <span><a href='https://www.linkedin.com/in/emily-renegar' rel='noopener noreferrer' target='_blank' className='icon'><i className="fab fa-linkedin-in fa-2x"></i></a></span>
                </Columns.Column>
            </Columns>
        </Fragment>
    );
    
};