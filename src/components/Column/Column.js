/* eslint-disable indent */
import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator';
//import { settings } from '../../data/dataStore';


class Column extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        column: PropTypes.node,
        name: PropTypes.node,
        cards: PropTypes.array,
        icon: PropTypes.string,
        //children: PropTypes.node.isRequired,
    }

    removeCard(id) {
        //console.log('remove card', id)
        console.log(this.state);
        this.setState({
            cards: this.state.cards.filter(card => card.key !== id),
        });
    }

    // editCard(title) {
    //     this.setState({
    //         cards: this.state.cards.map()

    //     })
    // }


    render() {
        const { title, icon, cards } = this.props;
        console.log(cards);
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{title}
                    {' '}
                    <span className={styles.icon}>
                        <Icon name={icon} />
                    </span>
                </h3>
                <div>
                    {cards.map(cardData => (
                        <Card key={cardData.id} title={cardData.id} {...cardData} removeCard={this.removeCard.bind(this)} />
                    ))}
                </div>
                {/*
                <div>
                    <Creator
                        text={settings.cardCreatorText}
                        action={title => this.addCard(title)} />
                </div>
                */}
            </section>
        );
    }
}

export default Column;