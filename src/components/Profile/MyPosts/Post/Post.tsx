import React from 'react';
import s from './Post.module.css'

export const Post = (props: any) => {
    return (
        <div className={s.item}>
            <img src="https://avatars.mds.yandex.net/i?id=5de4fb93a618d29692456273abede849-5227334-images-thumbs&n=13"
                 alt="Superman"/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )

}