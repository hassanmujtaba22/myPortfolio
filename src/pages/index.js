import React from 'react';
import { Container } from '@material-ui/core';

import Header from "../components/header/Header"
import Home from "../components/home/Home"

function Main() {
  return (
    <Container>
        <Header/>    
        <Home/>
    </Container>
  );
}

export default Main;
