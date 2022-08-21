import React, {ComponentType} from 'react';
import {addPostAC, PostType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redax-store';
import {compose, Dispatch} from 'redux';


type MapStateToPropsType = {
    posts: PostType[]
    newPostText:string
}

type MapDispatchToPropsType ={
    addPost: (text: string)=> void
}
export type PostsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state:AppStateType): MapStateToPropsType=> {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }}

let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType=> {
    return {
        addPost: (text: string) => {
            dispatch(addPostAC(text))},
        }
    }

export default compose<React.FC>(
    connect(mapStateToProps, mapDispatchToProps)
)(MyPosts)