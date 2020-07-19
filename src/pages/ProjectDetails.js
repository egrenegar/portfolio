import React, { useState } from 'react';
import { Columns, Heading } from 'react-bulma-components';
import './projectdetails.css';

const details = require('../details.json');

export default function ProjectDetails(props) {

    const id = props.match.params.id - 1;

    const [projectState] = useState({
        details,
        id,
        name: details[id].name,
        description: details[id].description,
        technologies: details[id].technologies,
        github: details[id].github,
        deployed: details[id].deployed
    });

    return (
        <Columns>
            <Columns.Column
                className='details-column'
                mobile={{
                    size: 10
                }}
                desktop={{
                    size: 5,
                }}
            >
                <div className='project-details'>
                    <div className='details-heading'>
                        <Heading className='details-name' size={3}>{projectState.name}</Heading>
                        <p className='details-description'>{projectState.description}</p>
                        <hr className='details-hr' />
                    </div>
                    <div className='technologies'>
                        <p>Built With:</p>
                        <br />
                        <ul>
                            {projectState.technologies.map(technology => (
                                <li className='technology'>
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Columns className='is-centered'>
                    <Columns.Column desktop={{size: 3}} className='details-links has-text-centered'>
                        <a href={projectState.github} target='_blank' rel='noopener noreferrer'>GitHub &gt;</a>
                    </Columns.Column>
                    <Columns.Column desktop={{size: 3}} className='details-links has-text-centered'>
                        <a href={projectState.deployed} target='_blank' rel='noopener noreferrer'>Deployed App &gt;</a>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
        </Columns>
    );
};