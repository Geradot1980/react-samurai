import React from 'react';
import { NavLink } from 'react-router-dom';
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

	let dialogElements = props.state.dialogsData.map(dialog => <DialogItem user={dialog.name} userid={dialog.id} />)
	let messageElements = props.state.messagesData.map(dialog => <MessageItem message={dialog.message} />)

	let newPostElement = React.createRef();

	// OnButtonClick
	let OnButtonClick1 = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={s.dialogs}>
			<div div className={s.dialogsItems}>
				{dialogElements}
			</div>
			<div className={s.messages}>
				{messageElements}
				<div><textarea name="" ref={newPostElement} cols="60" rows="5"></textarea>
					<div><button onClick={OnButtonClick1}>Add post</button></div></div>
			</div>
		</div>


	);
};
export default Dialogs;
