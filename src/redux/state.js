//import { rerenderEntireTree } from "../render";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGES_TEXT = 'UPDATE-NEW-MESSAGES-TEXT';
const ADD_MESSAGES = 'ADD-MESSAGES';

let store = {
	_state: {
		profilePage: {
			postsData: [
				{ massage: '1Hi, how are you?', likes: 15 },
				{ massage: '2It\'s my first post.', likes: 115 },
				{ massage: '3And What?', likes: 75 },
				{ massage: 'I am good?', likes: 53 }
			],

			myPostsCurrentText: "Main text1"
		},
		messagesPage: {
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
		}
	},
	_callSubscriber() { console.log("first"); },
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				massage: this._state.profilePage.myPostsCurrentText,
				likes: 0
			};
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.myPostsCurrentText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.myPostsCurrentText = action.NewPostText;
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGES_TEXT) {
			this._state.messagesPage.messagesCurrentText = action.NewMessageText;
			this._callSubscriber(this._state);
		}
		else if (action.type === ADD_MESSAGES) {
			let newMessagesText = { id: 9, message: this._state.messagesPage.messagesCurrentText };
			this._state.messagesPage.messagesData.push(newMessagesText);
			this._state.messagesPage.messagesCurrentText = '';
			this._callSubscriber(this._state);
		}
		else { alert(`Нет такого (${action.type}) в dispatch()`) };
	}
}



// секция ActionCreator
export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (NewPostText) => ({
	type: UPDATE_NEW_POST_TEXT, NewPostText: NewPostText
});
export const addMessageAC = () => ({ type: ADD_MESSAGES });
export const updateNewMessagesTextAC = (NewMessageText) => ({
	type: UPDATE_NEW_MESSAGES_TEXT, NewMessageText: NewMessageText
});
export default store;
window.store = store;

