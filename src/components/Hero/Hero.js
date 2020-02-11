/* eslint-disable indent */
import React from 'react';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


const Hero = (props) => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
        <img className={styles.image}
            src={props.image} />

    </header >
);

Hero.propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,

};

export default Hero;
