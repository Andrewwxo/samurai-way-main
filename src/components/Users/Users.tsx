import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png'
import {UserType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPopsType = {
    totalUserCount: number
    pageSize: number
    currentPage: number
    users: UserType[]
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    toggleIsFollowingProgress:(isFetching: boolean, userID: number)=>void
    toggleIsFetching: (isFetching: boolean) => void
    followingInProgress:number[]
}


export let Users = (props: UsersPopsType) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={`${props.currentPage === p && styles.selectedPage}`}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                         <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                    </NavLink>

                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=>id === u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '9e783027-f4c8-4865-9f3f-637d2acc2128'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id=== u.id)} onClick={() => {
                            props.toggleIsFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '9e783027-f4c8-4865-9f3f-637d2acc2128'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })

                        }}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </span>
            </span>
            </div>)
        }</div>
}

