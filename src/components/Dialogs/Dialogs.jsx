import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	return <div className={s.dialogPerson}>
		<NavLink to={`/dialogs/${props.userid}`} activeClassName={s.active}>{props.user}</NavLink>
	</div>
}
const MessageItem = (props) => { return <div className={s.message}>{props.message}</div> }

const Dialogs = (props) => {

	let dialogElements = props.dialogsData.map(dialog => <DialogItem user={dialog.name} userid={dialog.id} />)
	let messageElements = props.messagesData.map(dialog => <MessageItem message={dialog.message} />)

	return (
		<div className={s.dialogs}>
			<div div className={s.dialogsItems}>
				{dialogElements}
			</div>

			<div className={s.messages}>
				{messageElements}
			</div>
		</div>
	);
};
export default Dialogs;
