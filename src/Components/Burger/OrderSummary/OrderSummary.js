import React from 'react';
import Aux from '../../../Hoc/Aux'

const OrderSummary = (props) => {
    const order = Object.keys(props.ingredients)
        .map(igKey => {
            return(
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                </li>
            )
        })
    return(
        <Aux>
            <h3>YOUR ORDER</h3>
            <p>A delicious burger is ready with the following ingredients-:</p>
            <ul>
                {order}
            </ul>
            <p>Ready to checkout?</p>
            <button>CONTINUE</button>
            <button>CANCEL</button>
        </Aux>
    )
}

export default OrderSummary; 