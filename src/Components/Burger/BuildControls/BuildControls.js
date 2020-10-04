import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'}
]
const BuildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(control => {
                return <BuildControl 
                            key={control.label} 
                            label={control.label}
                            added={() => props.addIngredient(control.type)}
                            removed={() => props.removeIngredient(control.type)}
                            disabled={props.disabled[control.type]}/>
            })}
        </div>
    )
}

export default BuildControls; 