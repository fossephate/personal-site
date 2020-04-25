// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

// redux:
import { connect } from "react-redux";

// main components:

// material ui:
import { withStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Paper,
} from "@material-ui/core";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";
// import classNames from "classnames";

// jss:
const styles = (theme) => ({
	root: {
		// width: "100%",
		padding: "1%",
		// margin: "0 1%",
		display: "grid",
		justifyContent: "center",
		// gridTemplateRows: "repeat(4, 1fr)",
		// gridTemplateRows: "repeat(4, 400px)",
		// gridTemplateColumns: "repeat(2, 1fr)",
		// gridTemplateColumns: "repeat(3, 1fr)",
		gridTemplateColumns: "repeat(auto-fit, 300px)",
		// gridGap: "10px",
		gridGap: "60px 40px",
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerOpen: {
		marginLeft: "240px",
		width: "calc(100% - 240px)",
	},
	drawerClose: {
		width: "100%",
	},
	card: {
		width: 300,
		alignSelf: "center",
		marginLeft: "auto",
		marginRight: "auto",
	},
	media: {
		height: 168,
	},
	[device.tablet]: {
		root: {
			// gridTemplateRows: "repeat(4, 1fr)",
			// gridTemplateColumns: "repeat(3, 1fr)",
		},
		media: {
			// height: 160,
		},
	},
	[device.laptop]: {
		root: {
			// gridTemplateRows: "repeat(4, 1fr)",
			// gridTemplateColumns: "repeat(4, 1fr)",
		},
		media: {
			// height: 180,
		},
	},
});

const DUMMY_URL = "https://dummyimage.com/1280x720/000000/fff.png&text=todo";

class ProjectList extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {}

	render() {
		console.log("re-rendering streams.");

		const { classes } = this.props;

		return (
			<Paper className={classes.root} elevation={3}>
				<Link to="/dj">
					<Card className={classes.card} elevation={5}>
						<CardActionArea>
							{/* todo: put a default thumbnail here: */}
							<CardMedia className={classes.media} image={DUMMY_URL} title="Photo" />
							<CardContent>
								<Typography component="p">Democratic DJ</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
				<Link to="/party">
					<Card className={classes.card} elevation={5}>
						<CardActionArea>
							{/* todo: put a default thumbnail here: */}
							<CardMedia className={classes.media} image={DUMMY_URL} title="Photo" />
							<CardContent>
								<Typography component="p">Party Planner</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
				<Link to="/email">
					<Card className={classes.card} elevation={5}>
						<CardActionArea>
							{/* todo: put a default thumbnail here: */}
							<CardMedia className={classes.media} image={DUMMY_URL} title="Photo" />
							<CardContent>
								<Typography component="p">Email Read Receipts</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Link>
			</Paper>
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
	withStyles(styles, { withTheme: true }),
	connect(mapStateToProps, mapDispatchToProps),
)(ProjectList);
