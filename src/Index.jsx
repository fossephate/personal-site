// react:
import React, { Component, Suspense, lazy } from "react";
import ReactDOM from "react-dom";

// react-router:
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// modals:

// material ui:
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// notistack:
import { SnackbarProvider } from "notistack";

// components:
import Loading from "main/components/General/Loading.jsx";
const App = lazy(() => import("src/App.jsx"));

const DJ = lazy(() => import("main/DJ.jsx"));
const Party = lazy(() => import("main/Party.jsx"));

// const DJ = lazy(() => import("dj/App.jsx"));
// const Party = lazy(() => import("party/App.jsx"));

// redux:
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "main/reducers";

// actions:
import { updateSettings } from "main/actions/settings.js";

// redux-saga:
import createSagaMiddleware from "redux-saga";

// libs:
import localforage from "localforage";

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: createMuiTheme({}),
		};

		let preloadedState = {
			// client: {},

			settings: {},

			party: {},

			dj: {
				songs: {
					songName: "",
					songList: [],
					searchResults: [],
				},
			},

			form: {},
		};

		this.sagaMiddleware = createSagaMiddleware();

		this.store = configureStore({
			reducer: rootReducer,
			preloadedState: preloadedState,
			middleware: [this.sagaMiddleware],
		});

		// Get stored preferences
		localforage.getItem("settings").then((value) => {
			let settings = {};
			// If they exist, write them
			if (value) {
				settings = Object.assign({}, JSON.parse(value));
				settings.currentPlayer = 0; // same as above
				settings.largescreen = false;
				settings.fullscreen = false;
				settings.mobileMode = false;
				settings.hideChat = false;
				settings.hideNav = false;
			}

			this.store.dispatch(updateSettings({ ...settings }));
		});

		this.switchTheme = this.switchTheme.bind(this);

		let currentValue = null;
		const unsubscribe = this.store.subscribe(() => {
			let previousValue = currentValue;
			currentValue = this.store.getState().settings.theme;
			if (previousValue !== currentValue) {
				console.log("theme changed");
				this.switchTheme(currentValue);
				this.setState({});
			}
		});
	}

	componentDidMount() {
		this.store.dispatch(updateSettings({ theme: "dark" }));
	}

	switchTheme(themeName) {
		let theme = {};
		switch (themeName) {
			case "light":
				theme = {
					palette: {
						type: "light",
						primary: {
							main: "#2181ff", // #2181ff
						},
						secondary: {
							main: "#ff3b3b",
						},
						background: {
							paper: "#fafafa",
						},
					},
				};
				break;
			case "dark":
				theme = {
					palette: {
						type: "dark",
						primary: {
							main: "#2181ff", // #2181ff
						},
						secondary: {
							main: "#ff3b3b",
						},
						background: {
							paper: "#424242",
						},
					},
				};
				break;
			case "spotify":
				theme = {
					palette: {
						type: "dark",
						primary: {
							main: "#1db954",
						},
						secondary: {
							main: "#121212",
						},
						background: {
							paper: "#424242",
						},
					},
				} /*)*/;
				break;
		}
		// this.theme = createMuiTheme(this.theme);
		this.setState({ theme: createMuiTheme(theme) });
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		console.log("re-rendering index");

		return (
			<Provider store={this.store}>
				<ThemeProvider theme={this.state.theme}>
					<SnackbarProvider maxSnack={3}>
						<CssBaseline />
						<BrowserRouter>
							{/* selects the first matching path: */}
							{/* <Switch> */}
							<Suspense fallback={<Loading />}>
								<Switch>
									{/* <Route
										path="/about"
										render={(props) => {
											return <About {...props} />;
										}}
									/>
									<Route
										path="/FAQ"
										render={(props) => {
											return <FAQ {...props} />;
										}}
									/>
									<Route
										path="/privacy"
										render={(props) => {
											return <Privacy {...props} />;
										}}
									/>
									<Route
										path="/tos"
										render={(props) => {
											return <ToS {...props} />;
										}}
									/> */}
									<Route
										path="/party/:roomName?"
										render={(props) => {
											return <Party {...props} store={this.store} />;
										}}
									/>
									<Route
										path="/dj/:roomName?"
										render={(props) => {
											return <DJ {...props} store={this.store} />;
										}}
									/>
									{/* order matters here, can't do exact path or /login and /register break: */}
									<Route
										path="/"
										render={(props) => {
											return (
												<App
													{...props}
													store={this.store}
													sagaMiddleware={this.sagaMiddleware}
												/>
											);
										}}
									/>
								</Switch>
							</Suspense>
						</BrowserRouter>
					</SnackbarProvider>
				</ThemeProvider>
			</Provider>
		);
	}
}

export default Index;

ReactDOM.render(<Index />, document.getElementById("root"));
