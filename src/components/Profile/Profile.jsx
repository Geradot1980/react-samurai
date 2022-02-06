

import MyPosts from './MyPosts/MyPosts'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return <div>

		<ProfileInfo />
		<MyPosts state={props.state}
			myPostsCurrentText={props.state.myPostsCurrentText}
			addPost={props.addPost}
			changeNewPostText={props.changeNewPostText} />
	</div>

}
export default Profile;