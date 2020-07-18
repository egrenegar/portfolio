import React from 'react';
import './details.css';
import { Columns } from 'react-bulma-components';

export default function ProjectDetails(props) {
    return (
        <Columns>
            <Columns.Column>
                <div className='project-details'>
                    <div className='details-heading'>
                        <p className='project-name'></p>
                        <p className='project-description'></p>
                        <hr className='details-hr' />
                    </div>
                    <div className='technologies'>
                        <p>Notable Technologies:</p>
                        <ul>
                            {/* {props.technologies.map(technology => (
                                <li className='technology'>
                                    {technology}
                                </li>
                            ))} */}
                        </ul>
                    </div>
                </div>
            </Columns.Column>
        </Columns>

    );
};