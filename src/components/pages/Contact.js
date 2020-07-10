import React, {Fragment} from 'react';
import Heading from '../Heading/index';

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
           <Heading>
               <h2 style={styles.heading}>You can find me here:</h2>
           </Heading>
         </Fragment>
       
    )
}

export default About;