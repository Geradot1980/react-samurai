import Post from './Post/Post'
import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



/* const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) => {
	//debugger;
	//let postsElements = props.state.postsData.map(post => <Post massage={post.massage} likes={post.likes} />);
	//let newPostElement = React.createRef();
	let state = props.store.getState();


	// OnButtonClick
	let addPost = () => {
		//props.addPost();
		props.store.dispatch(addPostAC());
	}

	let onPostChange = (text) => {
		props.store.dispatch(updateNewPostTextAC(text));
		//props.myPostsCurrentText(newPostElement.current.value);
	}

	return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} 
		posts={state.profilePage.postsData}
		myPostsCurrentText={state.profilePage.
			myPostsCurrentText} />)

} */
const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.postsData,
		myPostsCurrentText: state.profilePage.myPostsCurrentText
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		addPost: () => { dispatch(addPostAC()) },
		updateNewPostText: (text) => { dispatch(updateNewPostTextAC(text)); }
	}
};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
