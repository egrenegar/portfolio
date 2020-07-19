import React from 'react';
import { Link } from 'react-router-dom';
import { Columns } from 'react-bulma-components';
import './ProjectFull.css';

export default function ProjectFull(props) {
    return (
        <Columns>
            <Columns.Column
                className={`container project-column ${props.class}`}
                id={props.id}
            >
            <Link to={`/projects/${props.id}`}>
                <img
                    src={props.src}
                    alt={props.alt}
                    className='project-photo image'
                />
            </Link>
                {props.children}
            </Columns.Column>
        </Columns>
    );
};

