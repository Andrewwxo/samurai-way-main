import React, {ReactNode} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from './ProfileContainer';

type ProfilePropsType = {
    profile: ProfileType
    status:string
    updateStatus:string
}

export const Profile = (props:ProfilePropsType) => {

    return (<div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )

};