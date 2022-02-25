import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageAC, updateNewMessagesTextAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';

//
const DialogItem = (props) => {
	return <div className={s.person}><img src="https://avatars.mds.yandex.net/i?id=e59182938582bce69289cfa854f5b0e4-5850122-images-thumbs&n=13&exp=1" alt="" srcset="" className={s.avatar} /><div className={s.dialogPerson}>
		<NavLink to={`/dialogs/${props.userid}`} activeClassName={s.active}>{props.user}</NavLink>
	</div>
	</div>
}

//
const MessageItem = (props) => {
	return <div className={s.messagesFlex}>
		<img src="https://avatars.mds.yandex.net/i?id=2a0000017a0cf85aad348ffba92753b35099-3106771-images-thumbs&n=13&exp=1" alt="" srcset="" className={s.messageAvatar} />
		<div className={s.message}>{props.message}</div></div>
}
//
const DialogsContainer = (props) => {

	let state = props.store.getState().dialogsPage;
	//let dialogElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem user={dialog.name} userid={dialog.id} />)
	//let messageElements = props.dialogsPage.dialogsData.map(dialog => <MessageItem message={dialog.message} />)
	//let newMessagesElement = React.createRef();


	// OnButtonClick
	let OnButtonClick1 = () => {
		props.store.dispatch(addMessageAC());
	}
	let onMessagesChange = (text) => {
		props.store.dispatch(updateNewMessagesTextAC(text));
		//console.log(newMessagesElement.current.value);
	}

	return (<Dialogs OnButtonClick1={OnButtonClick1} onMessagesChange={onMessagesChange}
		dialogsPage={state} />)

};
export default DialogsContainer;
