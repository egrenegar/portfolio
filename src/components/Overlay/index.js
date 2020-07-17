import React from 'react';
import './overlay.css';

function Overlay(props) {
    return (
        <div className='overlay'>
            <div className='overlay-text'>
                <div className='project-heading'>
                    <p className='project-name'>{props.name}</p>
                    <p className='description'>{props.description}</p>
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
                <div className='details'>
                <a href='#'>Details &gt;</a>
                </div>
            </div>
        </div>
    );
}

export default Overlay;