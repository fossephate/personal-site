// react:
import React, { Component } from "react";

// react-router:
import { withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// main components:
import ProjectList from "main/components/general/ProjectList.jsx";

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
		// height: "100vh",
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

	componentWillUnmount() {}

	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		console.log("re-rendering app.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				{/* <StreamsAppBar
					history={this.props.history}
				/> */}

				<ProjectList />

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
	connect(mapStateToProps, mapDispatchToProps),
)(App);
