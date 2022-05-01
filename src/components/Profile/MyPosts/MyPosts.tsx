import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea name="FreeText" id="1"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post massage={'Hi'}/>
                <Post message={'Ohh'}/>
            </div>
        </div>
    )

}