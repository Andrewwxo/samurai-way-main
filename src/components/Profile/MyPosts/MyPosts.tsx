import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/profile-reducer';

type MyPostType = {
    updateNewPostText: (text: string) => void
    addPost: ()=>void
    posts: PostType[]
    newPostText:string
}

export const MyPosts = (props:MyPostType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    let postsElement = props.posts.map(p => <Post massage={p.message}/>)

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostAC(props.updateNewPostText));
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

