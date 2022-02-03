import Post from './Post/Post'
import s from './MyPosts.module.css'
import React from 'react';


const MyPosts = (props) => {

	let postsElements = props.state.postsData.map(post => <Post massage={post.massage} likes={post.likes} />);
	let newPostElement = React.createRef();

	// OnButtonClick
	let OnButtonClick = () => {

		let text = newPostElement.current.value;
		props.addPost(text);
		newPostElement.current.value = '';
	}

	return <div> My posts
		<div><textarea name="" ref={newPostElement} cols="60" rows="5"></textarea>
			<div><button onClick={OnButtonClick}>Add post</button></div></div>
		<div>
			{postsElements}
		</div>

	</div>

}
export default MyPosts;