import React from 'react';
import { Columns } from 'react-bulma-components';
import './heading.css';

export default function Heading(props) {
    return(
        <Columns className='has-text-centered'>
            <Columns.Column className='portfolio-heading'>
                {props.children}
            </Columns.Column>
        </Columns>
    );
};