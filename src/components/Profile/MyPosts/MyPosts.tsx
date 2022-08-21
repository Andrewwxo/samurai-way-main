import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostType} from '../../../redux/profile-reducer';
import {PostsPropsType} from './MyPostsContainer';

// export type MyPostType = {
//     addPost: (value:string)=>void
//     posts: PostType[]
//     newPostText:string
// }

export const MyPosts = (props: PostsPropsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const [value,setValue] = useState<string>(props.newPostText ? props.newPostText : '')
    let postsElement = props.posts.map(p => <Post massage={p.message}/>)

    let onAddPost = () => {
        props.addPost(value)
        // props.dispatch(addPostAC(props.updateNewPostText));
    }
    //
    // let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = newPostElement.current?.value
    //     if (text) {
    //         props.updateNewPostText(text)
    //     }
    // }
        const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value)
}
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                        //value={props.newPostText}
                        value={value}
                              //onChange={onPostChange}
                        onChange={handleChange}
                    />
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

