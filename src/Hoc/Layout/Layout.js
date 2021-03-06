import React, { Component } from 'react';
import classes from './Layout.css'
import Aux from '../Aux/Aux';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar clicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} close={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


 export default Layout;