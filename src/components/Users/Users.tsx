import React from 'react';
import styles from './users.module.css';
import {UsersPropsType} from './UsersContainer';


export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://uznayvse.ru/images/catalog/2022/1/brad-pitt_24.jpg',
                followed: false,
                fullName: 'BradPitt',
                status: 'Big boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: '',
                followed: true,
                fullName: 'John',
                status: 'Big boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: '',
                followed: false,
                fullName: 'Sam',
                status: 'Big boss',
                location: {city: 'Gdansk', country: 'Poland'}
            },])
    }

    return <div>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)
    }</div>
}