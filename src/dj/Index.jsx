const IP = "https://fosse.co";
const PORT = 8001;
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

	componentDidMount() {
		// this.switchTheme("dark");
		// this.switchTheme("spotify");
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		console.log("re-rendering dj-index");

		return (
			<App
				{...this.props}
				serverConnection={this.serverConnection}
				// sagaMiddleware={this.sagaMiddleware}
			/>
		);
	}
}

export default Index;
