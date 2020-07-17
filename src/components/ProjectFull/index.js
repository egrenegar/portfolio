import React from 'react';
import { Columns } from 'react-bulma-components';
import './ProjectFull.css';

export default function ProjectFull(props) {
    return (
        
        <Columns>
            <Columns.Column
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

