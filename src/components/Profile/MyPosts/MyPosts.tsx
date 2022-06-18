import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type PostsType ={
    id:number
    message:string
}
type ProfilePageType ={
    posts:Array<PostsType>
    addPost:(message:string)=>void
}

export const MyPosts: React.FC<ProfilePageType> = ({posts, addPost}) => {

    const newPostElement = React.createRef<HTMLTextAreaElement> ()

    let postsElement = posts.map(p => <Post massage={p.message}/>)

    const addPosts=()=>{
        if (newPostElement.current){
            addPost(newPostElement.current?.value)
            newPostElement.current.value= ''
        }
        // const text = newPostElement.current?.value;
        // addPosts(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="FreeText" id="1" ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPosts}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}