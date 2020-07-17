import React from 'react';
import './overlay.css';

function Overlay(props) {
    return (
        <div className='overlay'>
            <div className='text'>
                <p className='name'>{props.name}</p>
                <hr className='overlay-hr'/>
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