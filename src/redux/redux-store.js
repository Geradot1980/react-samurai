import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidedarReducer from "./sidebar-reducer";



let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	sidebarPage: sidedarReducer,
});

let store = createStore(redusers);

window.store = store;
export default store;
