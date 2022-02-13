const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';
const ADD_MESSAGES = 'ADD-MESSAGES';

export const addMessageAC = () => ({ type: ADD_MESSAGES });
export const updateNewMessagesTextAC = (NewMessageText) => ({
	type: UPDATE_NEW_MESSAGES_TEXT, NewMessageText: NewMessageText
});


const dialogsReducer = (state, action) => {

	switch (action.type) {
		case UPDATE_NEW_MESSAGES_TEXT:
			state.messagesCurrentText = action.NewMessageText;
			return state;

		case ADD_MESSAGES:
			let newMessagesText = { id: 9, message: state.messagesCurrentText };
			state.messagesData.push(newMessagesText);
			state.messagesCurrentText = '';
			return state;
		default:
			return state;
	}

	/* 	if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
			state.messagesCurrentText = action.NewMessageText;
			return state;
		}
		else if (action.type === ADD_MESSAGES) {
			let newMessagesText = { id: 9, message: state.messagesCurrentText };
			state.messagesData.push(newMessagesText);
			state.messagesCurrentText = '';
			return state;
		}
		//else { alert(`Нет такого (${action.type}) в dispatch()`) };
	
		return state; */
}

export default dialogsReducer;