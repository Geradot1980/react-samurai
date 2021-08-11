import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
// import Footer from './Footer';
// import Header from './Header';
// import Technologies from './Technologies';


const App = () => {
	return (
		<div className="app-wrapper">

			<Header />
			<Navbar />
			<Profile />




			<footer className="footer"
			>права за Саней</footer>
		</div >
	);
}

export default App;
