import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type PostsType ={
    id:number
    message:string
}
type ProfilePageType ={
    posts:Array<PostsType>
    addPost:()=>void
}

export const MyPosts: React.FC<ProfilePageType> = ({posts, addPost}) => {

    const newPostElement = React.createRef ()

    let postsElement = posts.map(p => <Post massage={p.message}/>)

    const addPostS=()=>{
        const text = newPostElement.current.value;
        addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="FreeText" id="1" ref={newPostElement}></textarea>
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