import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type PostsType ={
    id:number
    message:string
}

type ProfilePropsType={
    posts:Array<PostsType>
    addPost:()=>void
}



export const Profile = (props:ProfilePropsType) => {
    return (<div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )

}