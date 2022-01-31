import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';






const App = (props) => {
	console.log(props);

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				console.log(props);
				<Header />
				<Navbar />
				<div className="app-wrapper-contant">
					<Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsData} messagesData={props.state.messagesData} />} />
					<Route path='/profile' render={() => <Profile postsData={props.state.postsData} />} />
					<Route path='/news' render={() => <News />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/settings' render={() => <Settings />} />
				</div>
				<Footer />
			</div >
		</BrowserRouter >
	);
}

export default App;
