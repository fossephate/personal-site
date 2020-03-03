// react:
import React, { Component } from "react";

// components:
import App from "party/App.jsx";

// libs:
import socketio from "socket.io-client";
class Index extends Component {
	constructor(props) {
		super(props);

		this.serverConnection = socketio("https://fosse.co", {
			path: "/8002/socket.io",
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
