const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';
const ADD_MESSAGES = 'ADD-MESSAGES';

export const addMessageAC = () => ({ type: ADD_MESSAGES });
export const updateNewMessagesTextAC = (NewMessageText) => ({
	type: UPDATE_NEW_MESSAGES_TEXT, NewMessageText: NewMessageText
});

let initialState = {
	messagesData: [
		{ id: 1, message: "Mes1" },
		{ id: 2, message: "Mes2-Geradot1" },
		{ id: 3, message: "Mes3-Geradot2" },
		{ id: 4, message: "Mes4Geradot3" },
		{ id: 5, message: "5Geradot4" }
	],
	messagesCurrentText: "Zero",
	dialogsData: [
		{ id: 1324, name: "Geradot" },
		{ id: 98123, name: "Geradot1" },
		{ id: 415657, name: "Geradot2" },
		{ id: 71864, name: "Geradot3" },
		{ id: 4561, name: "Geradot4" }]
};
const dialogsReducer = (state = initialState, action) => {

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