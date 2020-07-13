import React from 'react';
import Heading from '../components/Heading/index';
import ContactBody from '../components/ContactBody/index';
import Footer from '../components/Footer/index';
import { Container} from 'react-bulma-components';

export default function Contact() {
    return (
        <Container>
           <Heading>
               <h2>You can find me here:</h2>
           </Heading>
           <ContactBody/>
           <Footer/>
        </Container>
    )
};