import React from 'react';
import {connect} from 'react-redux';
import {Users} from './Users';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redax-store';
import {compose, Dispatch} from 'redux';

type MapStateToPropsType = {
    users: Array<UserType>
}
type MapDispatchToPropsType = {
    follow: (userID:number) => void,
    unfollow: (userID:number) => void,
    setUsers: (users: Array<UserType>) => void,
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userID:number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID:number) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}
export default compose<React.FC>(
    connect (mapStateToProps, mapDispatchToProps)
)(Users)
