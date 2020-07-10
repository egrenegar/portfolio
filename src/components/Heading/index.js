import React from 'react';
import { Columns } from 'react-bulma-components';

export default function Heading(props) {
    return(
        <Columns className="has-text-centered">
            <Columns.Column>
                {props.children}
            </Columns.Column>
        </Columns>
    );
};