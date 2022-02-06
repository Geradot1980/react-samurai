import { rerenderEntireTree } from "../render";

let state = {
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
			{ id: 4561, name: "Geradot4" }
		]
	}
}

/* export let addPost = (postMessage) => {
	let newPost = {
		massage: postMessage,
		likes: 0
	};
	state.profilePage.postsData.push(newPost);
	rerenderEntireTree(state);
}; */



export let addPost = () => {
	let newPost = {
		massage: state.profilePage.myPostsCurrentText,
		likes: 0
	};
	state.profilePage.postsData.push(newPost);
	state.profilePage.myPostsCurrentText = '';
	rerenderEntireTree(state);
};

export let changeNewPostText = (NewPostText) => {
	state.profilePage.myPostsCurrentText = NewPostText;
	rerenderEntireTree(state);
};

export default state;

