import React from 'react';
import { connect } from 'react-redux';
import { addMessageAC, updateNewMessagesTextAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: () => { dispatch(addMessageAC()); },
		updateNewMessagesText: (text) => { dispatch(updateNewMessagesTextAC(text)); },
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
