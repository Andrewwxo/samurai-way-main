export type ActionTypes = ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof toggleIsFetching>



export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        userID,
    } as const
}
export const unfollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        userID,
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users,
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage,
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalUserCount,
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching,
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
    photos?: any
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
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
                ...state, users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-TOTAL-USER-COUNT':
            return {
                ...state, totalUserCount: action.totalUserCount
            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state
    }

}