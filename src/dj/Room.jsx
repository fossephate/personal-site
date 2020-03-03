// react:
import React, { PureComponent } from "react";

// react-router:
import { withRouter } from "react-router";

// redux:
import { connect } from "react-redux";

// redux-saga:
import { updateSongList } from "dj/actions/songs.js";

// main components:

// components:
import SongList from "dj/components/General/SongList.jsx";
import SongSubmitForm from "dj/components/General/SongSubmitForm.jsx";

// secondary components:
import { Button, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

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
		flexDirection: "column",
		// justifyContent: "space-between",
		fontSize: "16px",
		width: "100%",
		maxWidth: "600px",
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
};

class Room extends PureComponent {
	constructor(props) {
		super(props);
		this.socket = null;

		this.handleSubmitUsername = this.handleSubmitUsername.bind(this);
		this.handleText = this.handleText.bind(this);
		this.handleCreatePlaylist = this.handleCreatePlaylist.bind(this);

		this.state = {
			username: "",
			roomName: "",
			openUsernameDialog: true,
		};

		this.roomName = null;
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

		if (!this.roomName) {
			console.log("room name not set!");
		}

		this.socket.on("songList", (data) => {
			// this.songList = data.songList;
			// this.setState({ songList: data.songList });
			this.props.updateSongList(data.songList);
			// this.props.store.dispatch(updateSongList({ songList: data.songList }));
		});
	}

	componentWillUnmount() {}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return false;
	// }

	handleSubmitUsername() {
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
				} else {
					alert(data.reason);
				}
			},
		);
	}

	handleText(event) {
		this.setState({ username: event.target.value });
	}

	handleCreatePlaylist() {
		this.socket.emit("createPlaylist", null, (data) => {
			if (!data.success) {
				console.log(data.reason);
			} else {
				console.log(data.playlist);
			}
		});
	}

	render() {
		console.log("rendering dj-room.");

		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<SongSubmitForm serverConnection={this.props.serverConnection} />
				{this.props.searchResults.length > 0 && (
					<SongList
						serverConnection={this.props.serverConnection}
						source={this.props.searchResults}
						type="results"
					/>
				)}
				{this.props.searchResults.length === 0 && (
					<SongList
						serverConnection={this.props.serverConnection}
						username={this.state.username}
						source={this.props.songList}
						type="songs"
					/>
				)}
				<Button
					className={classes.exportButton}
					onClick={this.handleCreatePlaylist}
					color="primary"
					variant="contained"
				>
					Export to Spotify
				</Button>
				<Dialog
					open={this.state.openUsernameDialog}
					onClose={() => {}}
					fullWidth={true}
					maxWidth="sm"
				>
					<DialogTitle id="alert-dialog-title">Pick a username</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Username"
							type="username"
							value={this.state.username}
							onChange={this.handleText}
							onKeyPress={(event) => {
								if (event.key == "Enter") {
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
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		songList: state.dj.songs.songList,
		searchResults: state.dj.songs.searchResults,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateSongList: (data) => {
			dispatch(updateSongList(data));
		},
	};
};

export default compose(
	withRouter,
	withStyles(styles),
	connect(mapStateToProps, mapDispatchToProps),
)(Room);
