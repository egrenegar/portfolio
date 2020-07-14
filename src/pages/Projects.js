import React from 'react';
import { Container } from 'react-bulma-components';
import ProjectFull from '../components/ProjectFull/index';
import ProjectHalf from '../components/ProjectHalf/index';
import Footer from '../components/Footer/index';
import AFAF from '../img/AFAF_mockup_compressed.png';
import Intown from '../img/INTown_mockup_compressed.png';
import Innovation from '../img/InnovationAuto_mockup.png';

function Projects() {
    return (
        <Container>
            <ProjectFull
                src={AFAF}
                alt='Asking For a Friend'
            />
            <ProjectFull
                src={Innovation}
                alt='Innovation Auto Hail Repair'
            />
            <ProjectFull
                src={Intown}
                alt='INTown'
            />
            
            <Footer/>
        </Container>
    )
}

export default Projects;