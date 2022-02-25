import Post from './Post/Post'
//import s from './MyPosts.module.css'
import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
//import { addPostAC, updateNewPostTextAC } from '../../../redux/dialogs-reducer';
//import { addPostAC, updateNewPostTextAC } from '../../../redux/state';


const MyPostsContainer = (props) => {
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

	return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.postsData}
		myPostsCurrentText={state.profilePage.
			myPostsCurrentText} />)

}
export default MyPostsContainer;
