/* eslint-disable indent */
import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faq } from '../../data/dataStore';

const FAQ = () => (
    <Container>
        <Hero title={faq.title} image={faq.image} />
        <p>{faq.textContent}</p>
    </Container>
);

export default FAQ;