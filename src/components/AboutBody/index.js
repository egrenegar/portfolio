import React, {Fragment} from 'react';
import { Columns } from 'react-bulma-components';
import image from '../../img/PortfolioImage.png';
import './AboutBody.css';

export default function AboutBody() {
    return(
        <Fragment>
            <Columns className='is-centered'>
                <Columns.Column size={2}>
                    <img className='image' alt='Emily Renegar' src={image} />
                </Columns.Column>
                <Columns.Column size={3}>
                    <p className='text'>
                        My name is Emily. I'm a Front-End Developer whose interest in coding was sparked as a pre-teen spending too much time customizing themes on MySpace.
                    </p>
                    <p className='text'>
                        Through my background in Apparel Design I developed an eye for detail and great design, which inform my choices when building beautiful, UX-first websites.
                    </p>
                    <p className='text'>
                        Other pleasures include gluten-free cooking, making lots and lots of playlists, and Sudoku. 
                    </p>
                </Columns.Column>
            </Columns>
            <Columns className='has-text-centered'>
                <Columns.Column>
                    <p className='contact'>
                        <span>Contact:</span> egrenegar@gmail.com
                    </p>
                </Columns.Column>
            </Columns>
        </Fragment>
    );
}