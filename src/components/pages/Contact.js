import React from 'react';
import Heading from '../Heading/index';
import ContactBody from '../ContactBody/index';
import { Container} from 'react-bulma-components';

export default function Contact() {
    return (
        <Container>
           <Heading>
               <h2>You can find me here:</h2>
           </Heading>
           <ContactBody/>
        </Container>
    )
};