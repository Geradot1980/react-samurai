import React from 'react';
import { NavLink } from 'react-router-dom';
import { addMessageAC, updateNewMessagesTextAC } from '../../redux/dialogs-reducer';
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
const Dialogs = (props) => {


	let dialogElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem user={dialog.name} userid={dialog.id} />)
	let messageElements = props.dialogsPage.messagesData.map(dialog => <MessageItem message={dialog.message} />)
	let newMessagesElement = React.createRef();


	// OnButtonClick
	let OnButtonClick1 = () => {
		props.dispatch(addMessageAC());
	}
	let onMessagesChange = () => {
		props.dispatch(updateNewMessagesTextAC(newMessagesElement.current.value));
		console.log(newMessagesElement.current.value);
	}

	return (
		<div className={s.dialogs}>
			<div div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div className={s.messages}>
				{messageElements}
				<div><textarea onChange={onMessagesChange} ref={newMessagesElement} cols="40" rows="5" value={props.dialogsPage.messagesCurrentText}></textarea>
					<div><button onClick={OnButtonClick1}>Add post</button></div></div>
			</div>
		</div>


	);
};
export default Dialogs;
