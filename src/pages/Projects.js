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
                    name='Asking For a Friend'
                    technologies={['Handlebars.js', 'Bulma CSS', 'jQuery', 'MySQL', 'Express']}
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
                />
            </ProjectFull>
            <Footer/>
        </Container>
    )
}

export default Projects;