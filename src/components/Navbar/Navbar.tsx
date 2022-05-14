import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item} >
                <NavLink to="/Profile" className='{navData => navData.isActive ? s.active : s.item}'>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Messages">Messages</NavLink>
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