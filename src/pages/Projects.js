import React from 'react';
import { Container } from 'react-bulma-components';
import ProjectFull from '../components/ProjectFull/index';
import Footer from '../components/Footer/index';
import Overlay from '../components/Overlay/index';
import AFAF from '../img/AFAF_mockup_compressed.png';
import Intown from '../img/INTown_mockup_compressed.png';
import Innovation from '../img/InnovationAuto_mockup.png';

function Projects() {
    return (
        <Container>
            <ProjectFull
                src={AFAF}
                alt='Asking For a Friend'
                id='one'
            >
                <Overlay
                    className='overlay'
                    name='Asking for a Friend'
                    technologies={['Handlebars.js', 'Bulma CSS', 'jQuery', 'MySQL', 'Express']}
                    description='Asking for a Friend is a question and answer website that allows users to post questions and others to respond.'
                />
            </ProjectFull>
            <ProjectFull
                src={Innovation}
                alt='Innovation Auto Hail Repair'
                id='two'
            >
                <Overlay
                    className='overlay'
                    name='Innovation Auto Repair'
                    technologies={['React','Next.js', 'Pure CSS & Flexbox', 'JavaScript']}
                    description='This full-stack website was built for a small auto body repair shop based in Texas. Its main function is to allow users to schedule free estimates, and for employees to manage appointments.'
                />
            </ProjectFull>
            <ProjectFull
                src={Intown}
                alt='INTown'
                id='three'
            >
                <Overlay
                    className='overlay'
                    name='INTown'
                    technologies={['HTML', 'Foundation CSS', 'JavaScript', 'Google Maps API']}
                    description='INTown unlocks the discovery of events, outdoor spaces, popular places, and restaurants in Charlotte, NC neighborhoods.'
                />
            </ProjectFull>
            <Footer/>
        </Container>
    )
}

export default Projects;