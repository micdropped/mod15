/* eslint-disable indent */
import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';



class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
        image: PropTypes.string,
        cards: PropTypes.array,
        addColumn: PropTypes.func,
    }

    static defaultProps = {
        description: settings.defaultListDescription,
    }

    render() {
        const { title, image, description, columns, addColumn } = this.props;

        return (
            <section className={styles.component}>
                <Hero titleText={title} image={image} />
                <div className={styles.description}>
                    {ReactHtmlParser(description)}
                </div>
                <div className={styles.columns}>
                    {columns.map(columnData => (
                        <Column key={columnData.id} {...columnData} />
                    ))}
                </div>

                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => addColumn(title)} />
                </div>
            </section>
        );
    }
}

export default List;
