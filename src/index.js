import './index.css';
import store from './redux/state';
//import { rerenderEntireTree } from './render';
import reportWebVitals from './reportWebVitals';
//import { addPost, changeNewPostText, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const rerenderEntireTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)} />
		</BrowserRouter>,
		document.getElementById('root'));
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

