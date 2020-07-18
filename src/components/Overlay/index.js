import React from 'react';
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
                
                <p className='technologies'>Notable Technologies:</p>
                <ul>
                    {props.technologies.map(technology => (
                        <li className='technology'>
                            {technology}
                        </li>
                    ))}
                </ul>
                <div className='links'>
                    <span> <a href={props.github} target='_blank' rel='noopener noreferrer'>GitHub &gt;</a></span>
                    <a href={props.deployed} target='_blank' rel='noopener noreferrer'>Deployed App &gt;</a>
                </div>
            </div>
        </div>
    );
}

export default Overlay;