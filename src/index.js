import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
	{ id: 1324, name: "Geradot" },
	{ id: 98123, name: "Geradot1" },
	{ id: 415657, name: "Geradot2" },
	{ id: 71864, name: "Geradot3" },
	{ id: 4561, name: "Geradot4" }
]

let messagesData = [
	{ id: 1, message: "Mes1" },
	{ id: 2, message: "Mes2-Geradot1" },
	{ id: 3, message: "Mes3-Geradot2" },
	{ id: 4, message: "Mes4Geradot3" },
	{ id: 5, message: "5Geradot4" }
]

let postsData = [
	{ massage: 'Hi, how are you?', likes: 15 },
	{ massage: 'It\'s my first post.', likes: 115 },
	{ massage: 'And What?', likes: 75 },
	{ massage: 'I am good?', likes: 53 }
]



ReactDOM.render(
	<React.StrictMode>
		<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
