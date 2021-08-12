import Post from './Post/Post'
import s from './MyPosts.module.css'


const MyPosts = () => {
	return <div> My posts
		<div><textarea name="" id="" cols="60" rows="5"></textarea>
			<button>Add post</button></div>
		<div>
			<Post massage='Hi, how are you?' likes='15' />
			<Post massage="It's my first post." likes='25' />


		</div>
	</div>

}
export default MyPosts;