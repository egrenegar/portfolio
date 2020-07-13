import React from 'react';
import Heading from '../components/Heading/index';
import AboutBody from '../components/AboutBody/index';
import Footer from '../components/Footer/index';
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