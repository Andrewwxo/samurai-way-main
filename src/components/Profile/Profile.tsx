import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

export const Profile = () => {
    return (<div className={s.content}>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=fbadab53f30b4e883580c722d2704121-5388696-images-thumbs&n=13"
                    alt="ocean"/>
            </div>
            <div>
                ava + descriptions
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    )

}