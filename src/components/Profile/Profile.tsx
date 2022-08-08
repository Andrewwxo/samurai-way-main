import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionTypes} from '../../redux/profile-reducer';

type PostsType ={
    id:number
    message:string
}

type ProfilePropsType={
    posts:Array<PostsType>
    dispatch: (action: ActionTypes) => void
    newPostText: string
}


export const Profile: React.FC<ProfilePropsType> = ({posts, dispatch, newPostText}) => {

    return (<div>
            <ProfileInfo/>
            <MyPosts posts={posts} dispatch={dispatch} newPostText ={newPostText}/>
        </div>
    )

};