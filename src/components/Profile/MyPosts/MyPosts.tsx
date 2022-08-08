import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionTypes, addPostAC, changeNewTextAC} from '../../../redux/profile-reducer';

type PostsType = {
    id: number
    message: string

}
type ProfilePageType = {
    posts: Array<PostsType>
    dispatch: (action: ActionTypes) => void
    newPostText: string

}

export const MyPosts: React.FC<ProfilePageType> = ({posts, ...props}) => {

    // const newPostElement = React.createRef<HTMLTextAreaElement>()

    let postsElement = posts.map(p => <Post massage={p.message}/>)

    // const addPosts=()=>{
    // if (newPostElement.current){
    //     addPost(newPostElement.current?.value)
    //     newPostElement.current.value= ''
    //     }
    //     const text = newPostElement.current?.value;
    //     addPosts(text)
    // }

    let addPost = () => {
        props.dispatch(addPostAC(props.newPostText));
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = changeNewTextAC(text)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

