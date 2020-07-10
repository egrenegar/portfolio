import React, { Fragment } from 'react';
import Heading from '../Heading/index';
import AboutBody from '../AboutBody/index';
import { Container} from 'react-bulma-components';


const styles = {
    heading: {
        fontFamily: 'Josefin Sans',
        fontWeight: 400,
        fontSize: '3rem',
        paddingTop: '6rem'
    }
}

function About() {
    return (
        <Fragment>
            <Container>
                <Heading>
                    <h2 style={styles.heading}>Thanks for being here!</h2>
                </Heading>
                <AboutBody/>
            </Container>
        </Fragment>
    )
}

export default About;