import React from 'react';
import {ActionTypes, addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {Store} from 'redux';
import {AppStateType} from '../../../redux/redax-store';

export type MyPostsContainerPropsType = {
    store: Store<AppStateType>
}
export const MyPostsContainer=(props:MyPostsContainerPropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewPost));
    }

    let onPostChange = (text: string) => {
        let action = changeNewTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.messageForNewPost}/>
    )
}

