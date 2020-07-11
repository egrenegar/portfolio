import React from 'react';
import Heading from '../Heading/index';
import AboutBody from '../AboutBody/index';
import Footer from '../Footer/index';
import { Container} from 'react-bulma-components';

export default function About() {
    return (
        <Container>
            <Heading>
                <h2>Thanks for being here!</h2>
            </Heading>
            <AboutBody/>
            <Footer/>
        </Container>
    )
};