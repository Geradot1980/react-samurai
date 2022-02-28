const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{ massage: '1Hi, how are you?', likes: 15 },
		{ massage: '2It\'s my first post.', likes: 115 },
		{ massage: '3And What?', likes: 75 },
		{ massage: 'I am good?', likes: 53 }
	],
	myPostsCurrentText: "Main text1"
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (NewPostText) => ({
	type: UPDATE_NEW_POST_TEXT, NewPostText: NewPostText
});

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				massage: state.myPostsCurrentText,
				likes: 0
			};
			let stateCopy = { ...state };
			stateCopy.postsData = [...state.postsData];
			stateCopy.postsData.push(newPost);
			stateCopy.myPostsCurrentText = '';
			return stateCopy;

		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = { ...state };

			stateCopy.myPostsCurrentText = action.NewPostText;
			return stateCopy;
		}
		default:
			return state;
	}

}

export default profileReducer;