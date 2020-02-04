import React from 'react';
import styles from './Card.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';


class Card extends React.Component {
    state = {
        readOnly: true,
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        id: PropTypes.node.isRequired
    }

    enableEdit() {
        this.setState(state => (
            {
                readOnly: false,
                btnEdit: 'OK'
            }
        ))
    }

    handleChange() { }

    render() {
        console.log("state col", this.state)
        console.log("props col", this.props)
        return (
            < section className={styles.component} >
                <input type="text"
                    readOnly={this.state.readOnly}
                    placeholder={this.props.title}
                    onChange={this.handleChange()} />
                <div className={styles.btnGroup}>
                    <button className={styles.btn} onClick={() => this.enableEdit()}>OK</button>
                    <button className={styles.btn} onClick={() => this.enableEdit()}>Edit</button>
                    <button className={styles.btn} onClick={() => this.props.removeCard(this.props.id)}>X</button>
                </div>
            </section>
        )
    }

}

// const Card = (props) => {

//     return (
//         < section className={styles.component} >
//             <input type="text" readOnly={false} placeholder={props.title} />
//             <div className={styles.btnGroup}>
//                 <button className={styles.btn}>Edit</button>
//                 <button className={styles.btn} onClick={() => props.removeCard(props.id)
//                 }>X</button>
//             </div>

//         </section >
//     )
// }
// Card.propTypes = {
//     title: PropTypes.node,
// };

export default Card;
