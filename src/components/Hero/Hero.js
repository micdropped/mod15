import React from 'react';
import styles from './Hero.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';


const Hero = (props) => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img className={styles.image}
            src={props.image} />
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,

};

export default Hero;
