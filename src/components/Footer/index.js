import React from 'react';
import { Columns } from 'react-bulma-components';
import './footer.css';

export default function Footer() {
    return(
        <Columns className='has-text-centered'>
            <Columns.Column>
                <div className='my-footer'>
                &copy; 2020 Emily Renegar
                </div>
            </Columns.Column>
        </Columns>
    );
};