import React from 'react';
import styles from './Column.scss';
import List from '../List/List.js';
import PropTypes from 'prop-types';


class Column extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        column: PropTypes.node,
        //children: PropTypes.node.isRequired,
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.columns}</h3>
            </section>
        )
    }
}

export default Column;
