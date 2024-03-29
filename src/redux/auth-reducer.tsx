import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

export type ActionTypes = ReturnType<typeof setAuthUserData>


export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET-USER-DATA',
        data: {userId, email, login},
    } as const
}
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: InitialStateType = {
    userId: null as null,
    email: null as null,
    login: null as null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        default:
            return state
    }

}