import React from 'react';
import styles from './Card.scss';
import { settings } from '../../data/dataStore';
import Button from '../Button/Button';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';



class Card extends React.Component {


    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        return (
            <section className={styles.component}>
                <h3>{this.props.title}</h3>
            </section>
        )
    }
}

export default Card;
