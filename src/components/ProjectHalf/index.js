import React from 'react';
import { Columns } from 'react-bulma-components';

export default function ProjectHalf() {
    return(
        <Columns className='is-centered'>
            <Columns.Column size={3}>
                <p>Test</p>
            </Columns.Column>
            <Columns.Column size={3}>
                <p>Test</p>
            </Columns.Column>
        </Columns>
    );
};