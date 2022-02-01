import Post from './Post/Post'
// import s from './MyPosts.module.css'


const MyPosts = (props) => {


	let postsElements = props.state.postsData.map(post => <Post massage={post.massage} likes={post.likes} />);

	return <div> My posts
		<div><textarea name="" id="" cols="60" rows="5"></textarea>
			<div><button>Add post</button></div></div>
		<div>
			{postsElements}
		</div>
	</div>

}
export default MyPosts;