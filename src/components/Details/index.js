import React from 'react';
import './details.css';
import { Columns } from 'react-bulma-components';
const details = require('../../details.json');

export default function ProjectDetails(props) {
    const id = props.id;

    for (let i = 1; i < details.length; i++) {
        if (details[i].id === id) {
            return (
                <Columns>
                    <Columns.Column>
                        <div className='project-details'>
                            <div className='details-heading'>
                                <p className='project-name'>{details[i].name}</p>
                                <p className='project-description'>{details[i].description}</p>
                                <hr className='details-hr' />
                            </div>
                            <div className='technologies'>
                                <p>Notable Technologies:</p>
                                <ul>
                                    {details[i].technologies.map(technology => (
                                        <li className='technology'>
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Columns.Column>
                </Columns>
        
            )
        };
    };
  
};