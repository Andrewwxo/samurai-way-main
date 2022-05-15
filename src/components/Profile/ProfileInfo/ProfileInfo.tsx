import React from 'react';
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (<div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=fbadab53f30b4e883580c722d2704121-5388696-images-thumbs&n=13"
                    alt="ocean"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptions
            </div>
        </div>
    )

}