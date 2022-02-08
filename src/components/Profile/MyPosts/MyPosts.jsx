import Post from './Post/Post'
//import s from './MyPosts.module.css'
import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';


const MyPosts = (props) => {

	let postsElements = props.state.postsData.map(post => <Post massage={post.massage} likes={post.likes} />);
	let newPostElement = React.createRef();


	// OnButtonClick
	let OnButtonClick = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
	}

	return <div> My posts
		<div><textarea onChange={onPostChange} name="" ref={newPostElement} value={props.myPostsCurrentText} />
			<div><button onClick={OnButtonClick}>Add post</button></div></div>
		<div>
			{postsElements}
		</div>

	</div>

}
export default MyPosts;