import s from './Post.module.css'

const Post = (props) => {
	return <div className={s.message}>
		<div><img src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="Аватар" className={s.avatar} /></div>
		<div className={s.item}>{`${props.massage}  Likes ${props.likes}`}</div>
	</div>
}
export default Post;