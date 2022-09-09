import React from 'react';
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean,
    login: string,
}

export const Header = (props: HeaderPropsType) => {
    return (<header className={s.header}>
            <img
                src="https://w7.pngwing.com/pngs/602/271/png-transparent-musical-ensemble-t-shirt-logo-graphic-design-t-shirt-angle-text-trademark.png"
                alt="Logo"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>

        </header>
    )

}