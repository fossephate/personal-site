// react:
import React, { Component } from "react";

// react-router:
import { Route, Switch, withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// actions:
import { updateSettings } from "main/actions/settings.js";

// redux-saga:

// main components:
import Main from "./Main.jsx";
import Room from "./Room.jsx";

// components:

// secondary components:

// material ui:
import { withStyles } from "@material-ui/core/styles";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

// libs:
// import localforage from "localforage";
// import swal from "sweetalert2";

// jss:
const styles = {
	root: {
		display: "flex",
		justifyContent: "center",
		height: "100%",
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

		this.props.store.dispatch(updateSettings({ theme: "spotify" }));

		// // listen to events and dispatch actions:
		// handleStreamEvents(this.socket, this.props.store.dispatch);
		// // handle outgoing events & listen to actions:
		// // and maybe dispatch more actions:
		// this.props.sagaMiddleware.run(handleStreamActions, {
		// 	socket: this.socket,
		// 	dispatch: this.props.store.dispatch,
		// });
	}

	render() {
		console.log("re-rendering app.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<Switch>
					<Route
						path="/dj/:roomName"
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
