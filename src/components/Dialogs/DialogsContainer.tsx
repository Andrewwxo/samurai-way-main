import React, {ComponentType} from 'react';
import {
    InitialStateType,
    sendMessage,
    updateNewMessageBody
} from '../../redux/dialogs-reducer';
import {compose, Dispatch, Store} from 'redux';
import {AppStateType} from '../../redux/redax-store';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../HOC/WithAuthRedirect';

type MapStateToPropsType = {
    dialogsPage: InitialStateType
}
type MapDispatchToProps ={
    updateNewMessageBody: (body:string)=>void,
    sendMessage: ()=> void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state:AppStateType): MapStateToPropsType=> {
    return {
        dialogsPage: state.dialogsPage,
    }}

// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
//     return {
//         updateNewMessageBody: (body:string)=> {updateNewMessageBody(body)},
//         sendMessage: ()=>{dispatch(sendMessage(initialState.newMessageBody))},
//     }
// }

export default compose<React.FC>(
    connect (mapStateToProps, {updateNewMessageBody,sendMessage }), withAuthRedirect)(Dialogs)