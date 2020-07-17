import React, {Fragment} from 'react';
import { Columns } from 'react-bulma-components';
import image from '../../img/PortfolioImage.png';
import './AboutBody.css';

export default function AboutBody() {
    return(
        <Fragment>
            <Columns className='is-centered reverse-columns'>
                <Columns.Column
                    desktop={{
                        size: 3,
                    }}
                    className='flex-item-1'>
                    <img className='image me' alt='Emily Renegar' src={image} />
                </Columns.Column>
                <Columns.Column
                    desktop={{
                        size: 4,
                    }}
                    className='flex-item-2'
                >
                    <p className='about-text'>
                        My name is Emily. I'm a Front-End Developer whose interest in coding was sparked as a pre-teen spending too much time customizing themes on MySpace.
                    </p>
                    <p className='about-text'>
                        Through my background in Apparel Design I developed an eye for detail and great design, which inform my choices when building beautiful, UX-first websites.
                    </p>
                    <p className='about-text'>
                        Other pleasures include gluten-free cooking, making lots and lots of playlists, and Sudoku. 
                    </p>
                </Columns.Column>
            </Columns>
            <Columns className='has-text-centered'>
                <Columns.Column>
                    <div className='contact'>
                        <p><span>Contact:</span> egrenegar@gmail.com</p>
                        <span><a href='https://github.com/egrenegar' rel='noopener noreferrer' target='_blank'><i className='fab fa-github icon'></i></a></span>
                        <span><a href='https://www.linkedin.com/in/emily-renegar' rel='noopener noreferrer' target='_blank'><i className='fab fa-linkedin-in icon'></i></a></span>
                    </div>
                </Columns.Column>
            </Columns>
        </Fragment>
    );
}