import React from 'react';
import { Columns } from 'react-bulma-components';
import './ProjectFull.css';

export default function ProjectFull(props) {
    return(
        <Columns>
            <Columns.Column>
            <img
                src={props.src}
                alt={props.alt}
                className='project-photo image'
            />
            </Columns.Column>
        </Columns>
    );
};

