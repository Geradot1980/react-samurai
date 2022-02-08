//import { rerenderEntireTree } from "../render";
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
		if (action.type === 'ADD-POST') {
			let newPost = {
				massage: this._state.profilePage.myPostsCurrentText,
				likes: 0
			};
			this._state.profilePage.postsData.push(newPost);
			this._state.profilePage.myPostsCurrentText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === 'UPDATE-NEW-POST-TEXT') {
			this._state.profilePage.myPostsCurrentText = action.NewPostText;
			this._callSubscriber(this._state);
		}
		else { alert(`Нет такого (${action.type}) в dispatch()`) };

	}
}

export default store;
window.store = store;

