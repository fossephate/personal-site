const IP = "https://fosse.co";
const PORT = 8003;

// react:
import React, { Component } from "react";

// components:
import App from "./App.jsx";

// libs:
import socketio from "socket.io-client";
class Index extends Component {
	constructor(props) {
		super(props);

		this.serverConnection = socketio(IP, {
			path: `/${PORT}/socket.io`,
			transports: ["polling", "websocket", "xhr-polling", "jsonp-polling"],
		});
	}

	componentDidMount() {}

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
