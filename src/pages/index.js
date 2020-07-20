import React from 'react';
import { Container } from '@material-ui/core';

import Header from "../components/header/Header"
import Home from "../components/home/Home"
import Skills from "../components/skillsection/Skills"
import Certifications from '../components/certification/Certification';
import Projects from '../components/projects/Projects';

function Main() {
  return (
    <Container>
        <Header/>    
        <Home/>
        <Skills/>
        <Certifications/>
        <Projects />
    </Container>
  );
}

export default Main;
