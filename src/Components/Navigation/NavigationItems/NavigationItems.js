import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' active>Hi</NavigationItem>
        <NavigationItem link='/'>Hello</NavigationItem>
        <NavigationItem link='/'>Bolo</NavigationItem>
    </ul>
)

export default NavigationItems;