const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (NewPostText) => ({
	type: UPDATE_NEW_POST_TEXT, NewPostText: NewPostText
});

const profileReducer = (state, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				massage: state.myPostsCurrentText,
				likes: 0
			};
			state.postsData.push(newPost);
			state.myPostsCurrentText = '';
			return state;

		case UPDATE_NEW_POST_TEXT:
			state.myPostsCurrentText = action.NewPostText;
			return state;
		default:
			return state;
	}

	/* if (action.type === ADD_POST) {
		let newPost = {
			massage: state.myPostsCurrentText,
			likes: 0
		};
		state.postsData.push(newPost);
		state.myPostsCurrentText = '';
		return state;
	}
	else if (action.type === UPDATE_NEW_POST_TEXT) {
		state.myPostsCurrentText = action.NewPostText;
		return state;
	}
	//else { alert(`Нет такого (${action.type}) в dispatch()`) };
	return state; */
}

export default profileReducer;