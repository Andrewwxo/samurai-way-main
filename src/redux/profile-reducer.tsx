export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = (postMessage: string) => {
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
    ]
}


export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postMessage,
            }
            return  {
                ...state,
                posts: [...state.posts, newPost],

            };
        case 'CHANGE-NEW-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }

}