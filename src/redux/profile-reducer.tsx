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

export const profileReducer = (state: ProfilePageType, action: RootActions) => {
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