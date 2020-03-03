// react:
import React, { Component } from "react";

// react-router:
import { Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// redux-saga:

// components:
// main components:
import Main from "./Main.jsx";
import Room from "./Room.jsx";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

// jss:
const styles = {
	root: {
		display: "flex",
		justifyContent: "center",
	},
	[device.tablet]: {
		root: {},
	},
	[device.laptop]: {
		root: {},
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.socket = null;

		this.state = {
			roomName: "",
			open: false,
		};
	}

	componentDidMount() {
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
		this.socket = this.props.serverConnection;

		// // listen to events and dispatch actions:
		// handleStreamEvents(this.socket, this.props.store.dispatch);
		// // handle outgoing events & listen to actions:
		// // and maybe dispatch more actions:
		// this.props.sagaMiddleware.run(handleStreamActions, {
		// 	socket: this.socket,
		// 	dispatch: this.props.store.dispatch,
		// });
	}

	componentWillUnmount() {}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return false;
	// }

	handleJoin = () => {
		this.props.history.push(`/party/${this.state.roomName}`);
	};

	handleCreate = () => {
		this.socket.emit("createRoom", null, (data) => {
			if (data.success) {
				this.setState({ open: true, roomName: data.roomName });
			} else {
				alert(data.reason);
			}
		});
	};

	handleClose = () => {
		this.props.history.push(`/party/${this.state.roomName}`);
		this.setState({ open: false });
	};

	handleText = (event) => {
		// console.log(event.target.value);
		this.setState({ roomName: event.target.value });
	};

	render() {
		console.log("re-rendering app.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Switch>
					<Route
						path="/party/:roomName"
						render={(props) => {
							return (
								<Room
									{...props}
									store={this.props.store}
									serverConnection={this.props.serverConnection}
									// sagaMiddleware={this.props.sagaMiddleware}
								/>
							);
						}}
					/>
					<Route
						path="/"
						render={(props) => {
							return (
								<Main
									{...props}
									store={this.props.store}
									serverConnection={this.props.serverConnection}
									// sagaMiddleware={this.props.sagaMiddleware}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(App);
