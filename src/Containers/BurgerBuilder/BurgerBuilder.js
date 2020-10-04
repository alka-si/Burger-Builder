import React, { Component } from 'react';
import Aux from '../../Hoc/Aux'

import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7
}

class BurgerBuilder extends Component{
    constructor(props){
        super(props)
        this.state = {
            ingredients: {
                 salad: 0,
                 bacon: 0,
                 cheese: 0,
                 meat: 0
            },
            totalPrice: 4
        }
        this.addIngredientHandler = this.addIngredientHandler.bind(this)
        this.removeIngredientHandler = this.removeIngredientHandler.bind(this)
    }

    addIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
           ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    }

    removeIngredientHandler(type){
        const oldCount = this.state.ingredients[type];
        if(oldCount > 0){
            const updatedCount = oldCount-1;
            const updatedIngredients = {
            ...this.state.ingredients
            }
            updatedIngredients[type] = updatedCount;
            const priceSubtraction = INGREDIENT_PRICES[type];
            const newPrice = this.state.totalPrice - priceSubtraction;
            this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
        }
    }

    render(){
        let disabledInfo = {...this.state.ingredients}
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0;
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    price={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler} 
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}/>
            </Aux>
        )
    }
};

export default BurgerBuilder;
