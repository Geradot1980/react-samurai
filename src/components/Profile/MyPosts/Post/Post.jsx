import s from './Post.module.css'

const Post = (props) => {
	return <div className={s.item}>{`${props.massage}  Likes ${props.likes}`}</div>
}
export default Post;