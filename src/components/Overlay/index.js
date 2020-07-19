import React from 'react';
import { Columns } from 'react-bulma-components';
import './overlay.css';

function Overlay(props) {
    return (
        <div className='overlay'>
            <div className='overlay-text'>
                <div className='project-heading'>
                    <p className='project-name'>{props.name}</p>
                    <p className='project-description'>{props.description}</p>
                    <hr className='overlay-hr'/>
                </div>
                
                <p className='technologies'>Built With:</p>
                <ul>
                    {props.technologies.map(technology => (
                        <li className='technology'>
                            {technology}
                        </li>
                    ))}
                </ul>
                <Columns>
                    <Columns.Column className='links'>
                        <a href={props.github} target='_blank' rel='noopener noreferrer'>GitHub &gt;</a>
                    </Columns.Column>
                    <Columns.Column className='links'>
                        <a href={props.deployed} target='_blank' rel='noopener noreferrer'>Deployed App &gt;</a>
                    </Columns.Column>
                </Columns>
            </div>
        </div>
    );
}

export default Overlay;