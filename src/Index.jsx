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
import Loading from "shared/components/general/Loading.jsx";

const Callback = lazy(() => import("main/Callback.jsx"));
const App = lazy(() => import("main/App.jsx"));
const DJ = lazy(() => import("dj/Index.jsx"));
const Party = lazy(() => import("party/Index.jsx"));
const Email = lazy(() => import("email/Index.jsx"));

// const DJ = lazy(() => import("dj/App.jsx"));
// const Party = lazy(() => import("party/App.jsx"));

// redux:
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "main/reducers";

// actions:
import { updateSettings } from "main/features/settings.js";

// redux-saga:
import createSagaMiddleware from "redux-saga";

// libs:
import localforage from "localforage";

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			theme: this.getTheme("dark"),
		};

		let preloadedState = {
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
			// if they exist, write them
			if (value) {
				settings = Object.assign({}, JSON.parse(value));
			}

			this.store.dispatch(updateSettings({ ...settings }));
		});

		let currentValue = null;
		this.store.subscribe(() => {
			let previousValue = currentValue;
			currentValue = this.store.getState().settings.theme;
			if (previousValue !== currentValue && previousValue !== null) {
				this.setState({ theme: this.getTheme(currentValue) });
			}
		});
	}

	componentDidMount() {
		this.store.dispatch(updateSettings({ theme: "dark" }));
	}

	getTheme = (themeName) => {
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
				};
				break;
		}
		return createMuiTheme(theme);
	};

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
										path="/callback"
										render={(props) => {
											return <Callback {...props} store={this.store} />;
										}}
									/>
									<Route
										path="/party"
										render={(props) => {
											return <Party {...props} store={this.store} />;
										}}
									/>
									<Route
										path="/dj"
										render={(props) => {
											return <DJ {...props} store={this.store} />;
										}}
									/>
									<Route
										path="/email"
										render={(props) => {
											return <Email {...props} store={this.store} />;
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
