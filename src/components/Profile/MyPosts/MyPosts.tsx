import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {

    let posts = [
        {id:1, message:'Hi, how a u?'},
        {id:2, message:"It's my first post"}
    ]
    let postsElement = posts.map(p => <Post massage={p.message}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea name="FreeText" id="1"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )

}