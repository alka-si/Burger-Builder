import React from 'react';
import classes from './Layout.css'
import Aux from '../../Hoc/Aux';

const Layout = (props) => (
     <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
 );

 export default Layout;