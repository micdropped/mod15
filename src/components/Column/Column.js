import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';


class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        column: PropTypes.node,
        name: PropTypes.node,
        //children: PropTypes.node.isRequired,
    }

    addCard(title) {
        this.setState(state => (
            {
                cards: [
                    ...state.cards,
                    {
                        key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
                        title: title,
                    }
                ]
            }
        ));
    }


    removeCard(id) {
        //console.log('remove card', id)
        console.log(this.state)
        this.setState({
            cards: this.state.cards.filter(card => card.key !== id)
        })
    }

    editCard(title) {
        this.setState({
            cards: this.state.cards.map()

        })
    }


    render() {
        console.log("state col", this.state)
        console.log("props col", this.props)
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}
                    {' '}
                    <span className={styles.icon}>
                        <Icon name={this.props.icon} />
                    </span>
                </h3>
                <div>
                    {this.state.cards.map((card) => {
                        return <Card title={card.title} key={card.key} id={card.key} removeCard={this.removeCard.bind(this)} />
                    })}
                </div>
                <div>
                    <Creator
                        text={settings.cardCreatorText}
                        action={title => this.addCard(title)} />
                </div>
            </section>
        )
    }
}

export default Column;