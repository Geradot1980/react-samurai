

import MyPosts from './MyPosts/MyPosts'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return <div>

		<ProfileInfo />
		<MyPosts state={props.state}
			myPostsCurrentText={props.state.myPostsCurrentText}
			dispatch={props.dispatch} />
	</div>

}
export default Profile;