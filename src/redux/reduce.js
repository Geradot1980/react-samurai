import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidedarReducer from "./sidebar-reducer";

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
		dialogsPage: {
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
		},
		sidebarPage: {}
	},
	_callSubscriber() { console.log("first"); },
	getState() { return this._state; },
	subscribe(observer) { this._callSubscriber = observer; },
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidedarReducer(this._state.sidebarPage, action);
		this._callSubscriber(this._state);

	}
}

export default store;
window.store = store;

