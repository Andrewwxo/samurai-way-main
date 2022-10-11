import {ProfileType} from '../components/Profile/ProfileContainer';
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type ActionTypes = ReturnType<typeof addPost> |
    ReturnType<typeof changeNewTextAC> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>

export const addPost = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage,
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText,
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile,
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET-STATUS',
        status,
    } as const
}
export const getUserProfile = (userID: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userID).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userID: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userID).then(response => {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export type PostType = {
    id: number
    message: string
}

export type InitialStateType = typeof initialState

let initialState = {
    newPostText: '',
    posts: [
        {id: 1, message: 'Hi, how a u?'},
        {id: 2, message: 'It\'s my first post'}
    ] as PostType[],
    profile: null as null | ProfileType,
    status: '',
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],

            };
        case 'CHANGE-NEW-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }

}