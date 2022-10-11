import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redax-store';
import {getStatus, getUserProfile, setUserProfile, updateStatus} from '../../redux/profile-reducer';
import {compose} from 'redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

type PathParamsType = {
    userId: string,
}
type MapStateToPropsType = {
    profile: ProfileType | null
    status: string

}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    photos: PhotosType
    status?:string
}
type PhotosType = {
    small: string
    large: string
}
type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void
    getUserProfile:(userID:string)=> void
    getStatus:(userID:string)=> void
    isAuth: boolean
    updateStatus:string
    status:string

}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }


};


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.FC>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}), withAuthRedirect,
    withRouter
)(ProfileContainer)