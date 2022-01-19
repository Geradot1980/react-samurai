import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

let menusData = [
	{ link: "/Profile", linkName: "Profile" },
	{ link: "/Dialogs", linkName: "Dialogs" },
	{ link: "/News", linkName: "News" },
	{ link: "/Music", linkName: "Music" },
	{ link: "/Settings", linkName: "Settings" }
]

let menusElements = menusData.map(menus => <div>< div className={s.item} > <NavLink to={menus.link} activeClassName={s.active}>{menus.linkName}</NavLink> </div></div>)

const Navbar = () => {
	return <nav className={s.nav}> {menusElements} </nav>
}
export default Navbar;