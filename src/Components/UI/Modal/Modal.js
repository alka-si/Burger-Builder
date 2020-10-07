import React, { Component } from 'react';
import Aux from '../../../Hoc/Aux'
import classes from './Modal.css'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component{

        componentWillUpdate(){
            console.log("[Modal] WillUpdate")
        }

        //This is to optimize as the modal should only be updates when ordersummary shown.
        shouldComponentUpdate(nextProps, nextState){
            return nextProps.show !== this.props.show
        }

        render(){
            return(
                <Aux>
                    <Backdrop show={this.props.show} dismiss={this.props.modalClosed}/>
                    <div 
                        className={classes.Modal}
                        style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                opacity: this.props.show ? '1' : '0'}}>
                        {this.props.children}
                    </div>
                </Aux>
            )
    }
};

export default Modal;