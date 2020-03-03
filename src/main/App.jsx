// react:
import React, { Component } from "react";

// react-router:
import { withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// material ui:
import { withStyles } from "@material-ui/core/styles";
// import { Snackbar } from "@material-ui/core";

// notistack:

import { withSnackbar } from "notistack";

// main components:

// components:

// secondary components:
import { Button } from "@material-ui/core";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

// jss:
const styles = {
	root: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100vh",
		justifyContent: "center",
		margin: "0 auto",
		maxWidth: "700px",
	},
	[device.tablet]: {
		root: {},
	},
	[device.laptop]: {
		root: {},
	},

	links: {
		display: "flex",
		flexDirection: "column",
	},
};

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	componentWillUnmount() {
		// save settings on close:
		console.log("saving settings");
		localforage.setItem("settings", JSON.stringify(this.props.settings));
	}

	shouldComponentUpdate(nextProps, nextState) {
		// all settings:
		if (JSON.stringify(this.props.settings) != JSON.stringify(nextProps.settings)) {
			return false;
		}

		if (this.state != nextState) {
			return true;
		}

		return false;
	}

	render() {
		console.log("re-rendering stream.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				{/* <StreamsAppBar
					history={this.props.history}
				/> */}

				<div className={classes.links}>
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							window.location.href = "/party";
						}}
					>
						Party Planner
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							window.location.href = "/dj";
						}}
					>
						Democratic DJ
					</Button>
				</div>

				{/* selects the first matching path: */}
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
	withSnackbar,
	connect(mapStateToProps, mapDispatchToProps),
)(App);
