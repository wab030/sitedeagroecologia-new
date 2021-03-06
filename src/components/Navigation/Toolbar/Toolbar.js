import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';

const toolbar = (props) => (
    <header className="Toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} sideDrawerOpen={props.open}/> 
        <nav className="DesktopOnly">
            <div className="Titulo">
                <p className="text-center">AGROECOLOGIA <span className="TituloBranco">EM REDE</span></p>
            </div>
            <NavigationItems isAuthenticated={props.isAuth}/> 
        </nav>
    </header>

);

export default toolbar;