import React from 'react';

import {Header} from './Header';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import axios from 'axios';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {setUserProfile} from '../../redux/profile-reducer';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redax-store';
import {ProfileType} from '../Profile/ProfileContainer';

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
}

type PropsType = RouteComponentProps<PathParamsType> & HeaderContainerPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id,email,login)
                }
            })
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
    connect(mapStateToProps, {setAuthUserData}),
    withRouter
)(HeaderContainer)