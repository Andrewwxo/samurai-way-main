import React from 'react';
import {Profile} from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redax-store';
import {setUserProfile} from '../../redux/profile-reducer';
import {compose} from 'redux';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: string,
}
type MapStateToPropsType = {
    profile: ProfileType | null

}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    photos: PhotosType
}

type PhotosType = {
    small: string
    large: string
}
type ProfileContainerPropsType = {
    profile: ProfileType
    setUserProfile: (profile: ProfileType) => void

}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }


};


let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
})

// const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default compose<React.FC>(
    connect(mapStateToProps, {setUserProfile}),
    withRouter
)(ProfileContainer)