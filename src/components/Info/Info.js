/* eslint-disable indent */
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { info } from '../../data/dataStore';

const Info = () => (
    <Container>
        <Hero title={info.title} image={info.image} />
        <p>{info.textContent}</p>
    </Container>
);

export default Info;