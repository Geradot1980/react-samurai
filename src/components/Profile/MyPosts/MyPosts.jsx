import Post from './Post/Post'
//import s from './MyPosts.module.css'
import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
//import { addPostAC, updateNewPostTextAC } from '../../../redux/dialogs-reducer';
//import { addPostAC, updateNewPostTextAC } from '../../../redux/state';


const MyPosts = (props) => {

	let postsElements = props.posts.map(post => <Post massage={post.massage} likes={post.likes} />);
	let newPostElement = React.createRef();


	// OnButtonClick
	let onAddPost = () => {
		props.addPost();
		//	props.dispatch(addPostAC());
	}

	let onPostChange = () => {
		//props.dispatch(updateNewPostTextAC(newPostElement.current.value));
		props.updateNewPostText(newPostElement.current.value);
	}

	return <div> My posts
		<div><textarea onChange={onPostChange} ref={newPostElement} value={props.myPostsCurrentText} />
			<div><button onClick={onAddPost}>Add post</button></div></div>
		<div>
			{postsElements}
		</div>

	</div>

}
export default MyPosts;
