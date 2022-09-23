import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/redax-store';
import {connect} from 'react-redux';

type MapStateToProps = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): MapStateToProps => ({
    isAuth: state.auth.isAuth,
})

export function withAuthRedirect <T>(Component: React.FC<T>) {

    const RedirectComponent = (props:MapStateToProps) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent

}