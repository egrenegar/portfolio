import React from 'react';
import Heading from '../Heading/index';
import AboutBody from '../AboutBody/index';
import { Container} from 'react-bulma-components';

function About() {
    return (
        <Container>
            <Heading>
                <h2>Thanks for being here!</h2>
            </Heading>
            <AboutBody/>
        </Container>
    )
}

export default About;