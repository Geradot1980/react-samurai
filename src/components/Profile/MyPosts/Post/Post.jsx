import s from './Post.module.css'

const Profile = () => {
	return <div className="contant">
		<div className={s.banner}><img className={s.banner_img} src="https://naked-science.ru/wp-content/uploads/2018/04/field_image_istock-516189065.jpg" alt="Шапка тела" /></div>
		<div ><img className={s.avatar_img} src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="Аватарка" /> + description.</div>
		<div> My posts
			<div>New posts</div>
			<div>
				<div className={s.item}>post1</div>
				<div className={s.item}>post2</div>
			</div>
		</div></div>

}
export default Profile;