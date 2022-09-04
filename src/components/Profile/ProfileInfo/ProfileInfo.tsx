import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../ProfileContainer';

type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div>
            <div>
                <img
                    src="https://avatars.mds.yandex.net/i?id=fbadab53f30b4e883580c722d2704121-5388696-images-thumbs&n=13"
                    alt="ocean"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + descriptions
            </div>
        </div>
    )

}