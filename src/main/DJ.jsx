// react:
import React, { Component } from "react";

// components:
import App from "dj/App.jsx";

// redux:
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";

// actions:

// // redux-saga:
import createSagaMiddleware from "redux-saga";

// libs:
import socketio from "socket.io-client";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

class Index extends Component {
	constructor(props) {
		super(props);

		this.serverConnection = socketio("https://fosse.co", {
			path: "/8001/socket.io",
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});
	}

	componentDidMount() {
		// this.switchTheme("dark");
		// this.switchTheme("spotify");
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		console.log("re-rendering index");

		return (
			<App
				{...this.props}
				serverConnection={this.serverConnection}
				sagaMiddleware={this.sagaMiddleware}
			/>
		);
	}
}

export default Index;
