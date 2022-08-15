import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes} from '../../redux/profile-reducer';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {Store} from 'redux';

export type ProfilePropsType = {
    store: Store
}

export const Profile = (props: ProfilePropsType) => {

    return (<div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )

};