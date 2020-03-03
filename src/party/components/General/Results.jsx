// react:
import React, { PureComponent } from "react";

// material ui:
import { withStyles } from "@material-ui/core/styles";

// components:
import {
	Paper,
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Typography,
	List,
	ListItem,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// redux:
import { connect } from "react-redux";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";

function isInArray(array, value) {
	return !!array.find((item) => {
		return item.getTime() == value.getTime();
	});
}

// jss:

const styles = (theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		// height: "64px",
		// lineHeight: "64px",
		// paddingLeft: "1%",
		// fontSize: "14px",
		minWidth: "400px",
		maxWidth: "700px",
		width: "100%",
		alignSelf: "center",
		margin: "15px 0",
		// minHeight: "300px",
		// overflowY: "auto",
	},
	[device.tablet]: {
		root: {},
	},
	[device.laptop]: {
		root: {},
	},

	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},

	heading2: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "40%",
		flexShrink: 0,
	},
	secondaryHeading2: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
});

class Results extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			expanded: null,
		};
	}

	componentDidMount() {
		this.socket = this.props.serverConnection;
	}

	handleChange = (panel, isExpanded) => {
		this.setState({ expanded: this.state.expanded === panel ? null : panel });
	};

	render() {
		const { classes, userSubmissions, rankings } = this.props;

		let panels = [];

		let MAX_RESULTS = 5;
		let length = rankings.length > MAX_RESULTS - 1 ? MAX_RESULTS : rankings.length;
		// let length = rankings.length;

		for (let i = 0; i < length; i++) {
			let dateString = new Date(rankings[i].date).toLocaleDateString();

			dateString = dateString.slice(0, -5);

			let whoCanGo = [];
			let whoCantGo = [];
			let maybes = [];

			for (let username in userSubmissions) {
				let sub = userSubmissions[username];

				if (isInArray(sub.canDays, new Date(rankings[i].date))) {
					whoCanGo.push(username);
				} else if (isInArray(sub.cantDays, new Date(rankings[i].date))) {
					whoCantGo.push(username);
				} else {
					maybes.push(username);
				}
			}

			let subPanels = [];
			let count = 0;

			subPanels.push(
				<ExpansionPanel key={count++}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading2}>People who can go</Typography>
						<Typography className={classes.secondaryHeading}>
							{whoCanGo.length === 1
								? `${whoCanGo.length} person`
								: `${whoCanGo.length} people`}
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<List>
							{whoCanGo.map((item, index) => (
								<ListItem key={index}>{item}</ListItem>
							))}
						</List>
					</ExpansionPanelDetails>
				</ExpansionPanel>,
			);

			subPanels.push(
				<ExpansionPanel key={count++}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading2}>People who cant go</Typography>
						<Typography className={classes.secondaryHeading}>
							{whoCantGo.length === 1
								? `${whoCantGo.length} person`
								: `${whoCantGo.length} people`}
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<List>
							{whoCantGo.map((item, index) => (
								<ListItem key={index}>{item}</ListItem>
							))}
						</List>
					</ExpansionPanelDetails>
				</ExpansionPanel>,
			);

			subPanels.push(
				<ExpansionPanel key={count++}>
					<ExpansionPanelSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header"
					>
						<Typography className={classes.heading2}>Undecided / Maybe</Typography>
						<Typography className={classes.secondaryHeading}>
							{maybes.length === 1
								? `${maybes.length} person`
								: `${maybes.length} people`}
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<List>
							{maybes.map((item, index) => (
								<ListItem key={index}>{item}</ListItem>
							))}
						</List>
					</ExpansionPanelDetails>
				</ExpansionPanel>,
			);

			panels.push(
				<ExpansionPanel
					key={i}
					expanded={this.state.expanded === `panel${i}`}
					onChange={() => {
						this.handleChange(`panel${i}`);
					}}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{dateString}</Typography>
						<Typography className={classes.secondaryHeading}>
							{`score: ${rankings[i].score}`}
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
							{subPanels}
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>,
			);
		}

		return (
			<Paper className={classes.root} elevation={5}>
				{panels}
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
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(Results);
