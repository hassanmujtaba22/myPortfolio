import React from 'react';
import { Container } from '@material-ui/core';

import Header from "../components/header/Header"
import Home from "../components/home/Home"
import Skills from "../components/skillsection/Skills"

function Main() {
  return (
    <Container>
        <Header/>    
        <Home/>
        <Skills/>
    </Container>
  );
}

export default Main;
