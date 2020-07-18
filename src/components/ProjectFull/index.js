import React from 'react';
import { Columns } from 'react-bulma-components';
import './ProjectFull.css';

export default function ProjectFull(props) {
    return (
        <Columns>
            <Columns.Column
                mobile={{
                    size: 'full',
                }}
                desktop={{
                    size: 'half',
                }}
                className='container'
                id={props.id}
            >
                <img
                    src={props.src}
                    alt={props.alt}
                    className='project-photo image'
                />
                {props.children}
            </Columns.Column>
        </Columns>
    );
};

