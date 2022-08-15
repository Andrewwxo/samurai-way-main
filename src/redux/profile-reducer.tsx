import {PostsType, ProfilePageType, RootActions, StoreType} from './store';

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>

export const addPostAC = (postMessage: string) => {
    return {
        type: 'ADD-POST',
        postMessage: postMessage,
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText,
    } as const
}

export type PostType = {
    id: number
    message: string
}

let initialState = {
    messageForNewPost: '',
    posts: [
        {id: 1, message: 'Hi, how a u?'},
        {id: 2, message: 'It\'s my first post'}
    ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: RootActions): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newList: PostsType = {
                id: new Date().getTime(),
                message: action.postMessage,
            }
            state.posts.push(newList)
            return state
        case 'CHANGE-NEW-TEXT':
            state.messageForNewPost = action.newText
            return state
        default:
            return state
    }

}