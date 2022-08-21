
export type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}
export const unfollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID,
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}

type UserLocation = {
    city: string,
    country: string,
}

export type UserType = {
    id: number,
    photoUrl: string,
    followed: boolean,
    fullName: string,
    status: string,
    location: UserLocation
}

export type InitialStateType = {
   users: Array<UserType>
}

let initialState: InitialStateType = {
    users:[]
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case 'SET-USERS':
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state
    }

}