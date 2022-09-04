import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/News'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'}>Settings</NavLink>
            </div>

        </nav>
    )

}