import React from 'react';
import Aux from '../../../Hoc/Aux'
import Button from '../../UI/Button/Button'

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
            <p><b>TOTAL PRICE: ${props.price.toFixed(2)}</b></p>
            <p>Continue to checkout?</p>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
        </Aux>
    )
}

export default OrderSummary; 