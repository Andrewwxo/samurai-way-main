import React from 'react';
import {Header} from './Header';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {getAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redax-store';

type PathParamsType = {
    userId: string,
}
type MapStateToPropsType = {}
type HeaderContainerPropsType = {
    userId: number | null,
    email: string | null,
    login: string,
    isAuth: boolean
    setAuthUserData: (id: number, email: string, login: string) => void
    getAuthUserData:()=>void
}

type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
       this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default compose<React.FC>(
    connect(mapStateToProps, {getAuthUserData}),
    withRouter
)(HeaderContainer)