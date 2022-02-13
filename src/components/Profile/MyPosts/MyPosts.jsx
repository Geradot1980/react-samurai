import Post from './Post/Post'
//import s from './MyPosts.module.css'
import React from 'react';
import { addPostAC, updateNewPostTextAC } from '../../../redux/profile-reducer';
//import { addPostAC, updateNewPostTextAC } from '../../../redux/dialogs-reducer';
//import { addPostAC, updateNewPostTextAC } from '../../../redux/state';


const MyPosts = (props) => {

	let postsElements = props.state.postsData.map(post => <Post massage={post.massage} likes={post.likes} />);
	let newPostElement = React.createRef();


	// OnButtonClick
	let OnButtonClick = () => { props.dispatch(addPostAC()); }

	let onPostChange = () => {
		props.dispatch(updateNewPostTextAC(newPostElement.current.value));
	}

	return <div> My posts
		<div><textarea onChange={onPostChange} ref={newPostElement} value={props.myPostsCurrentText} />
			<div><button onClick={OnButtonClick}>Add post</button></div></div>
		<div>
			{postsElements}
		</div>

	</div>

}
export default MyPosts;
