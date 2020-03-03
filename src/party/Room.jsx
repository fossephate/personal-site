// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// redux-saga:

// main components:

// components:
import Results from "party/components/General/Results.jsx";

// secondary components:
import {
	Button,
	TextField,
	Paper,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@material-ui/core";

// material ui:
import { withStyles } from "@material-ui/core/styles";

import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

// recompose:
import { compose } from "recompose";

// libs:
import { device } from "shared/libs/utils.js";
import { interpolateColors } from "shared/libs/utils.js";

const GREEN_HIGHLIGHT = "#1af434";
const RED_HIGHLIGHT = "#f6230c";
const BLUE_HIGHLIGHT = "#1e56f0";
// const YELLOW_HIGHLIGHT = "#a0af17";

// jss:
const styles = {
	root: {
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		height: "100vh",
		width: "100%",
		fontSize: "10px",
		// margin: "1%",
	},
	[device.tablet]: {
		root: {
			fontSize: "20px",
		},
	},
	[device.laptop]: {
		root: {},
	},

	textField: {
		margin: "0px",
	},
	formPart: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		// width: "50%",
		height: "min-content",
	},
	exportButton: {
		marginTop: "10px",
	},

	legend: {
		display: "flex",
		flexDirection: "row",
		margin: "0 auto",
		fontSize: "20px",
		textAlign: "center",
		marginTop: "10px",
	},
};

export function deserializeDates(dates) {
	let datesArr = [];
	for (let i = 0; i < dates.length; i++) {
		let d = new Date(dates[i]);
		d.setHours(0, 0, 0, 0);
		datesArr.push(d);
	}
	return datesArr;
}

export function deserializeSubs(subs) {
	let newSubs = {};

	for (let username in subs) {
		newSubs[username] = {
			canDays: deserializeDates(subs[username].canDays),
			cantDays: deserializeDates(subs[username].cantDays),
		};
	}
	return newSubs;
}

function rgbStringToHex(rgbString) {
	let numbers = rgbString.match(/(\d+)/g).map(Number);

	let finalString = "#";
	for (let i = 0; i < numbers.length; i++) {
		let hex = numbers[i].toString(16);
		if (hex.length < 2) {
			hex = "0" + hex;
		}
		finalString += hex;
	}

	return finalString;
}

function consistentDateString(d) {
	d = new Date(d);
	d.setHours(0, 0, 0, 0);
	return d.toISOString();
	// return d.toLocaleDateString();
}

function isInArray(array, value) {
	return !!array.find((item) => {
		return item.getTime() == value.getTime();
	});
}

const currentYear = new Date().getFullYear();
const fromMonth = new Date(currentYear, 0);
const toMonth = new Date(currentYear + 10, 11);

function YearMonthForm({ date, localeUtils, onChange }) {
	const months = localeUtils.getMonths();

	const years = [];
	for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i += 1) {
		years.push(i);
	}

	const handleChange = (e) => {
		const { year, month } = e.target.form;
		onChange(new Date(year.value, month.value));
	};

	return (
		<form className="DayPicker-Caption">
			<select
				style={{
					width: "55%",
					height: "40px",
					fontSize: "27px",
				}}
				name="month"
				onChange={handleChange}
				value={date.getMonth()}
			>
				{months.map((month, i) => (
					<option key={month} value={i}>
						{month}
					</option>
				))}
			</select>
			<select
				style={{
					width: "30%",
					height: "40px",
					fontSize: "27px",
				}}
				name="year"
				onChange={handleChange}
				value={date.getFullYear()}
			>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</form>
	);
}

class Room extends PureComponent {
	constructor(props) {
		super(props);
		this.socket = null;

		this.state = {
			username: "",
			roomName: "",
			openUsernameDialog: true,
			isHost: false,

			potentialDays: [],
			canDays: [],
			cantDays: [],
			userSubmissions: {},
			rankings: [],

			showingResults: false,

			month: fromMonth,
			num: 0,
		};

		this.roomName = null;
		this.dayPickerRef = React.createRef();
	}

	componentDidMount() {
		// // listen to events and dispatch actions:
		// handleStreamEvents(this.socket, this.props.store.dispatch);
		// // handle outgoing events & listen to actions:
		// // and maybe dispatch more actions:
		// this.props.sagaMiddleware.run(handleStreamActions, {
		// 	socket: this.socket,
		// 	dispatch: this.props.store.dispatch,
		// });

		this.socket = this.props.serverConnection;

		this.roomName = this.props.match.params.roomName;

		window.socket = this.socket;

		if (!this.roomName) {
			console.log("room name not set!");
		}

		// this.socket.on("songList", (data) => {
		// 	// this.songList = data.songList;
		// 	// this.setState({ songList: data.songList });
		// 	this.props.updateSongList(data.songList);
		// 	// this.props.store.dispatch(updateSongList({ songList: data.songList }));
		// });
	}

	componentWillUnmount() {}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return false;
	// }

	handleSubmitUsername = () => {
		if (this.state.username === "") {
			alert("username can't be empty");
			return;
		}

		this.socket.emit(
			"joinRoom",
			{ roomName: this.roomName, username: this.state.username },
			(data) => {
				if (data.success) {
					this.setState({ openUsernameDialog: false });

					// move date picker to the current month
					this.handleYearMonthChange(new Date());

					if (data.isHost) {
						this.setState({ isHost: true });
						alert(
							"You are the Host! Please pick potential dates for the party and submit them!",
						);

						if (data.userSubmissions) {
							this.setState({ userSubmissions: deserializeSubs(data.userSubmissions) });
						}
					}
					if (data.potentialDays) {
						let days = deserializeDates(data.potentialDays);
						this.setState({ potentialDays: days });
						if (days.length > 0) {
							this.setState({ month: days[0] });
						}
						if (!data.isHost) {
							alert("Please select which dates you can and can't go!");
						}
					}
					if (data.canDays && data.cantDays) {
						this.setState({
							canDays: deserializeDates(data.canDays),
							cantDays: deserializeDates(data.cantDays),
						});
					}
				} else {
					alert(data.reason);
				}
			},
		);
	};

	handleText = (event) => {
		this.setState({ username: event.target.value });
	};

	handleSubmitDates = () => {
		// this.socket.emit("createPlaylist", null, (data) => {
		// 	if (!data.success) {
		// 		console.log(data.reason);
		// 	} else {
		// 		console.log(data.playlist);
		// alert("successfully sent date data!");
		// 	}
		// });

		if (this.state.isHost) {
			this.socket.emit(
				"submitPotentialDays",
				{ potentialDays: this.state.potentialDays },
				(data) => {
					if (!data.success) {
						console.log(data.reason);
					} else {
						// alert("successfully sent date data!");
					}
				},
			);
		} else {
			this.socket.emit(
				"submitDays",
				{ canDays: this.state.canDays, cantDays: this.state.cantDays },
				(data) => {
					if (!data.success) {
						console.log(data.reason);
					} else {
						// alert("successfully sent date data!");
					}
				},
			);
		}
	};

	handleResults = () => {
		let scores1 = {};
		for (let username in this.state.userSubmissions) {
			let sub = this.state.userSubmissions[username];

			for (let i = 0; i < sub.canDays.length; i++) {
				let d = consistentDateString(sub.canDays[i]);
				if (!isInArray(this.state.potentialDays, new Date(sub.canDays[i]))) {
					continue;
				}
				if (typeof scores1[d] === "undefined") {
					scores1[d] = 1;
				} else {
					scores1[d] += 1;
				}
			}

			for (let i = 0; i < sub.cantDays.length; i++) {
				let d = consistentDateString(sub.cantDays[i]);
				if (!isInArray(this.state.potentialDays, new Date(sub.cantDays[i]))) {
					continue;
				}
				if (typeof scores1[d] === "undefined") {
					scores1[d] = -1;
				} else {
					scores1[d] -= 1;
				}
			}
		}

		let scores2 = [];

		for (let key in scores1) {
			let score = scores1[key];

			scores2.push({ date: key, score: score });
		}

		scores2.sort((a, b) => (a.score < b.score ? 1 : -1));

		let results = "scores: ";

		for (let i = 0; i < scores2.length; i++) {
			results += `{${new Date(scores2[i].date).toLocaleDateString()}: ${
				scores2[i].score
			}} `;
		}

		this.setState({ showingResults: true, rankings: scores2 });
	};

	getResultStyles = () => {
		let styles = {};

		styles.modifiers = {
			// selected: this.state.potentialDays,
			// can: this.state.canDays,
			// cant: this.state.cantDays,
		};
		styles.modifiersStyles = {
			// selected: {
			// 	color: "white",
			// 	backgroundColor: BLUE_HIGHLIGHT,
			// },
			// can: {
			// 	color: "white",
			// 	backgroundColor: GREEN_HIGHLIGHT,
			// },
			// cant: {
			// 	color: "white",
			// 	backgroundColor: RED_HIGHLIGHT,
			// },
		};

		let colors = interpolateColors(
			"rgb(0, 255, 0)",
			"rgb(255, 0, 0)",
			this.state.rankings.length,
		);

		for (let i = 0; i < this.state.rankings.length; i++) {
			let date = this.state.rankings[i].date;

			let bgColor = `rgb(${colors[i][0]}, ${colors[i][1]}, ${colors[i][2]})`;

			styles.modifiers[i] = [new Date(date)];
			styles.modifiersStyles[i] = {
				color: "white",
				backgroundColor: rgbStringToHex(bgColor),
			};
		}

		return styles;
	};

	handleYearMonthChange = (date) => {
		this.setState({ month: date });
	};

	handleDayClick = (day, { selected }) => {
		let { potentialDays, canDays, cantDays } = this.state;

		if (this.state.isHost) {
			if (selected) {
				const selectedIndex = potentialDays.findIndex((selectedDay) =>
					DateUtils.isSameDay(selectedDay, day),
				);
				potentialDays.splice(selectedIndex, 1);
			} else {
				potentialDays.push(day);
			}
			this.setState({ potentialDays });
		} else {
			const canDayIndex = canDays.findIndex((selectedDay) =>
				DateUtils.isSameDay(selectedDay, day),
			);

			const cantDayIndex = cantDays.findIndex((selectedDay) =>
				DateUtils.isSameDay(selectedDay, day),
			);

			const potentialDayIndex = potentialDays.findIndex((selectedDay) =>
				DateUtils.isSameDay(selectedDay, day),
			);

			if (potentialDayIndex === -1) {
				return;
			}

			if (canDayIndex !== -1) {
				canDays.splice(canDayIndex, 1);
				cantDays.push(day);
				canDays = deserializeDates(canDays); // ensure consistency
				cantDays = deserializeDates(cantDays); // ensure consistency
				this.setState({ canDays, cantDays });
			} else if (cantDayIndex !== -1) {
				cantDays.splice(cantDayIndex, 1);
				cantDays = deserializeDates(cantDays); // ensure consistency
				this.setState({ cantDays });
			} else {
				canDays.push(day);
				canDays = deserializeDates(canDays); // ensure consistency
				this.setState({ canDays });
			}
		}

		this.setState({ num: Math.random() * Math.random() * Math.random() });
		this.handleSubmitDates();
	};

	render() {
		console.log("re-rendering party-room.");

		const { classes } = this.props;

		let modifiers = {
			selected: this.state.potentialDays,
			can: this.state.canDays,
			cant: this.state.cantDays,
		};
		let modifiersStyles = {
			selected: {
				color: "white",
				backgroundColor: BLUE_HIGHLIGHT,
			},
			can: {
				color: "white",
				backgroundColor: GREEN_HIGHLIGHT,
			},
			cant: {
				color: "white",
				backgroundColor: RED_HIGHLIGHT,
			},
		};

		if (this.state.showingResults) {
			let styles = this.getResultStyles();
			modifiers = styles.modifiers;
			modifiersStyles = styles.modifiersStyles;
		}

		return (
			<div className={classes.root}>
				<div className={classes.legend}>
					<Paper
						elevation={4}
						style={{ padding: "5px", margin: "0 3px", backgroundColor: BLUE_HIGHLIGHT }}
					>
						Potential Date / Maybe
					</Paper>
					<Paper
						elevation={4}
						style={{ padding: "5px", margin: "0 3px", backgroundColor: GREEN_HIGHLIGHT }}
					>
						Can Go
					</Paper>
					<Paper
						elevation={4}
						style={{ padding: "5px", margin: "0 3px", backgroundColor: RED_HIGHLIGHT }}
					>
						Can't Go
					</Paper>
				</div>

				<div
					className="YearNavigation"
					style={{ width: "min-content", margin: "0 auto" }}
				>
					<DayPicker
						// showOutsideDays
						onDayClick={this.handleDayClick}
						selectedDays={this.state.potentialDays}
						modifiers={modifiers}
						modifiersStyles={modifiersStyles}
						month={this.state.month}
						fromMonth={fromMonth}
						toMonth={toMonth}
						captionElement={({ date, localeUtils }) => (
							<YearMonthForm
								date={date}
								localeUtils={localeUtils}
								onChange={this.handleYearMonthChange}
							/>
						)}
						ref={this.dayPickerRef}
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Button
						className={classes.exportButton}
						onClick={() => {
							alert("successfully sent!");
						}}
						color="primary"
						variant="contained"
						style={{ margin: "0 3px" }}
					>
						Submit Dates
					</Button>
					{this.state.isHost && (
						<Button
							className={classes.exportButton}
							onClick={this.handleResults}
							color="secondary"
							variant="contained"
							style={{ margin: "0 3px" }}
						>
							Show Results
						</Button>
					)}
				</div>
				<Dialog
					open={this.state.openUsernameDialog}
					onClose={() => {}}
					fullWidth={true}
					maxWidth="sm"
				>
					<DialogTitle id="alert-dialog-title">Type your name</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Full Name"
							type="username"
							value={this.state.username}
							onChange={this.handleText}
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									this.handleSubmitUsername();
								}
							}}
							fullWidth
						/>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={this.handleSubmitUsername}
							color="primary"
							variant="contained"
						>
							Submit
						</Button>
					</DialogActions>
				</Dialog>
				{this.state.showingResults && (
					<Results
						userSubmissions={this.state.userSubmissions}
						rankings={this.state.rankings}
					/>
				)}
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
)(Room);
