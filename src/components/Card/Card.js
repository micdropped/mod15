import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';




const Card = (props) => {

    return (
        < section className={styles.component} >
            <h3>{props.title}</h3>
            <button className={styles.btn} onClick={() => {
                console.log("działam", props)
            }}>X</button>
        </section >
    )
}
Card.propTypes = {
    title: PropTypes.node,
};

export default Card;
