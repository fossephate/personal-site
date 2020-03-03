(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ArrowDownward.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowDownward.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), 'ArrowDownward');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ArrowUpward.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/ArrowUpward.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
}), 'ArrowUpward');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js"));

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  if (true) {
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}

/***/ }),

/***/ "./src/dj/App.jsx":
/*!************************!*\
  !*** ./src/dj/App.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var main_actions_settings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! main/actions/settings.js */ "./src/main/actions/settings.js");
/* harmony import */ var _Room_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Room.jsx */ "./src/dj/Room.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var dj_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dj/constants/DeviceSizes.js */ "./src/dj/constants/DeviceSizes.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_15__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// react:
 // react-router:

 // redux:

 // actions:

 // redux-saga:
// main components:

 // components:
// secondary components:






 // material ui:

 // recompose:

 // device sizes:

 // libs:


window.localforage = localforage__WEBPACK_IMPORTED_MODULE_14___default.a;

window.swal = sweetalert2__WEBPACK_IMPORTED_MODULE_15___default.a; // jss:

const styles = {
  root: {},
  [dj_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_13__["device"].tablet]: {
    root: {}
  },
  [dj_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_13__["device"].laptop]: {
    root: {}
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "5% 20%",
    height: "100vh"
  },
  textField: {
    margin: "0px"
  },
  formPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // width: "50%",
    height: "min-content" // padding: "0 20%",

  },
  centerText: {
    display: "flex !important",
    justifyContent: "center !important"
  },
  joinButton: {
    whiteSpace: "nowrap"
  }
};

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.socket = null;
    this.handleJoin = this.handleJoin.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      roomName: "",
      open: false
    };
  }

  componentDidMount() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }

    this.socket = this.props.serverConnection;
    this.props.store.dispatch(Object(main_actions_settings_js__WEBPACK_IMPORTED_MODULE_3__["updateSettings"])({
      theme: "spotify"
    })); // // listen to events and dispatch actions:
    // handleStreamEvents(this.socket, this.props.store.dispatch);
    // // handle outgoing events & listen to actions:
    // // and maybe dispatch more actions:
    // this.props.sagaMiddleware.run(handleStreamActions, {
    // 	socket: this.socket,
    // 	dispatch: this.props.store.dispatch,
    // });
  }

  componentWillUnmount() {
    this.props.store.dispatch(Object(main_actions_settings_js__WEBPACK_IMPORTED_MODULE_3__["updateSettings"])({
      theme: "dark"
    }));
  } // shouldComponentUpdate(nextProps, nextState) {
  // 	return false;
  // }


  handleJoin() {
    this.props.history.push(`/party/${this.state.roomName}`);
  }

  handleCreate() {
    this.socket.emit("createRoom", null, data => {
      if (data.success) {
        this.setState({
          open: true,
          roomName: data.roomName
        });
      } else {
        alert(data.reason);
      }
    });
  }

  handleClose() {
    this.props.history.push(`/party/${this.state.roomName}`);
    this.setState({
      open: false
    });
  }

  handleText(event) {
    // console.log(event.target.value);
    this.setState({
      roomName: event.target.value
    });
  }

  render() {
    console.log("re-rendering app.");
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/party/:roomName",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Room_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
          store: this.props.store,
          serverConnection: this.props.serverConnection // sagaMiddleware={this.props.sagaMiddleware}

        }));
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      path: "/",
      render: props => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
          elevation: 4,
          className: classes.mainContainer
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          style: {
            textAlign: "center"
          }
        }, "Democratic DJ"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.formPart
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
          id: "outlined-name",
          label: "Room Name",
          className: classes.textField,
          value: this.state.roomName,
          onChange: this.handleText,
          margin: "normal",
          variant: "outlined"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          className: classes.joinButton,
          variant: "contained",
          color: "primary",
          size: "medium",
          onClick: this.handleJoin,
          onKeyPress: event => {
            if (event.key == "Enter") {
              this.handleJoin();
            }
          }
        }, "Join Room")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
          className: classes.centerText
        }, "OR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: classes.formPart
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          variant: "contained",
          color: "secondary",
          size: "large",
          onClick: this.handleCreate
        }, "Create A Room")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
          open: this.state.open,
          onClose: this.handleClose,
          fullWidth: true,
          maxWidth: "md"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
          id: "alert-dialog-title"
        }, "Room Created!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__["default"], {
          id: "alert-dialog-description"
        }, "A room has been created with the room name ", this.state.roomName)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          onClick: this.handleClose,
          color: "primary",
          variant: "contained"
        }, "OK"))));
      }
    })));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_12__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_11__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(App));

/***/ }),

/***/ "./src/dj/Room.jsx":
/*!*************************!*\
  !*** ./src/dj/Room.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var dj_actions_songs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dj/actions/songs.js */ "./src/dj/actions/songs.js");
/* harmony import */ var party_components_General_SongList_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! party/components/General/SongList.jsx */ "./src/party/components/General/SongList.jsx");
/* harmony import */ var party_components_General_SongSubmitForm_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! party/components/General/SongSubmitForm.jsx */ "./src/party/components/General/SongSubmitForm.jsx");
/* harmony import */ var party_components_General_SearchResults_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! party/components/General/SearchResults.jsx */ "./src/party/components/General/SearchResults.jsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "./node_modules/@material-ui/core/esm/DialogActions/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var party_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! party/constants/DeviceSizes.js */ "./src/party/constants/DeviceSizes.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_16__);
// react:
 // react-router:

 // redux:

 // redux-saga:

 // main components:
// components:



 // secondary components:





 // material ui:

 // recompose:

 // device sizes:

 // libs:


window.localforage = localforage__WEBPACK_IMPORTED_MODULE_15___default.a;

window.swal = sweetalert2__WEBPACK_IMPORTED_MODULE_16___default.a; // jss:

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    height: "94vh",
    fontSize: "10px"
  },
  [party_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_14__["device"].tablet]: {
    root: {
      fontSize: "20px"
    }
  },
  [party_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_14__["device"].laptop]: {
    root: {}
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "500px"
  },
  textField: {
    margin: "0px"
  },
  formPart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // width: "50%",
    height: "min-content"
  },
  exportButton: {
    marginTop: "10px"
  }
};

class Room extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.socket = null;
    this.handleSubmitUsername = this.handleSubmitUsername.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleCreatePlaylist = this.handleCreatePlaylist.bind(this);
    this.state = {
      username: "",
      roomName: "",
      openUsernameDialog: true // songList: [],

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

    this.socket.on("songList", data => {
      // this.songList = data.songList;
      // this.setState({ songList: data.songList });
      this.props.updateSongList(data.songList); // this.props.store.dispatch(updateSongList({ songList: data.songList }));
    });
  }

  componentWillUnmount() {} // shouldComponentUpdate(nextProps, nextState) {
  // 	return false;
  // }


  handleSubmitUsername() {
    if (this.state.username === "") {
      alert("username can't be empty");
      return;
    }

    this.socket.emit("joinRoom", {
      roomName: this.roomName,
      username: this.state.username
    }, data => {
      if (data.success) {
        this.setState({
          openUsernameDialog: false
        });
      } else {
        alert(data.reason);
      }
    });
  }

  handleText(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleCreatePlaylist() {
    this.socket.emit("createPlaylist", null, data => {
      if (!data.success) {
        console.log(data.reason);
      } else {
        console.log(data.playlist);
      }
    });
  }

  render() {
    console.log("re-rendering party.");
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.root
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(party_components_General_SongSubmitForm_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
      serverConnection: this.props.serverConnection
    }), this.props.searchResults.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(party_components_General_SearchResults_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      serverConnection: this.props.serverConnection
    }), this.props.searchResults.length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "30px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(party_components_General_SongList_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
      serverConnection: this.props.serverConnection,
      username: this.state.username
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: classes.exportButton,
      onClick: this.handleCreatePlaylist,
      color: "primary",
      variant: "contained"
    }, "Export to Spotify"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: this.state.openUsernameDialog,
      onClose: () => {},
      fullWidth: true,
      maxWidth: "md"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
      id: "alert-dialog-title"
    }, "Pick a username"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
      autoFocus: true,
      margin: "dense",
      id: "name",
      label: "Username",
      type: "username",
      value: this.state.username,
      onChange: this.handleText,
      onKeyPress: event => {
        if (event.key == "Enter") {
          this.handleSubmitUsername();
        }
      },
      fullWidth: true
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      onClick: this.handleSubmitUsername,
      color: "primary",
      variant: "contained"
    }, "Submit"))));
  }

}

const mapStateToProps = state => {
  return {
    searchResults: state.dj.songs.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSongList: data => {
      dispatch(Object(dj_actions_songs_js__WEBPACK_IMPORTED_MODULE_3__["updateSongList"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_13__["compose"])(react_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"], Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps))(Room));

/***/ }),

/***/ "./src/dj/actions/songs.js":
/*!*********************************!*\
  !*** ./src/dj/actions/songs.js ***!
  \*********************************/
/*! exports provided: updateSongName, updateSongList, updateSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSongName", function() { return updateSongName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSongList", function() { return updateSongList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchResults", function() { return updateSearchResults; });
const updateSongName = songName => {
  return {
    type: "UPDATE_SONG_NAME",
    payload: {
      songName: songName
    }
  };
};
const updateSongList = songList => {
  return {
    type: "UPDATE_SONG_LIST",
    payload: {
      songList: songList
    }
  };
};
const updateSearchResults = searchResults => {
  return {
    type: "UPDATE_SEARCH_RESULTS",
    payload: {
      searchResults: searchResults
    }
  };
};

/***/ }),

/***/ "./src/dj/constants/DeviceSizes.js":
/*!*****************************************!*\
  !*** ./src/dj/constants/DeviceSizes.js ***!
  \*****************************************/
/*! exports provided: size, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobile: "600px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};
const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  desktop: `@media (min-width: ${size.desktop})`
};

/***/ }),

/***/ "./src/main/constants/DeviceSizes.js":
/*!*******************************************!*\
  !*** ./src/main/constants/DeviceSizes.js ***!
  \*******************************************/
/*! exports provided: size, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobile: "600px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};
const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  desktop: `@media (min-width: ${size.desktop})`
};

/***/ }),

/***/ "./src/party/actions/songs.js":
/*!************************************!*\
  !*** ./src/party/actions/songs.js ***!
  \************************************/
/*! exports provided: updateSongName, updateSongList, updateSearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSongName", function() { return updateSongName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSongList", function() { return updateSongList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSearchResults", function() { return updateSearchResults; });
const updateSongName = songName => {
  return {
    type: "UPDATE_SONG_NAME",
    payload: {
      songName: songName
    }
  };
};
const updateSongList = songList => {
  return {
    type: "UPDATE_SONG_LIST",
    payload: {
      songList: songList
    }
  };
};
const updateSearchResults = searchResults => {
  return {
    type: "UPDATE_SEARCH_RESULTS",
    payload: {
      searchResults: searchResults
    }
  };
};

/***/ }),

/***/ "./src/party/components/General/Result.jsx":
/*!*************************************************!*\
  !*** ./src/party/components/General/Result.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var dj_actions_songs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dj/actions/songs.js */ "./src/dj/actions/songs.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/main/constants/DeviceSizes.js");
// react:
 // material ui:

 // components:

 // redux:


 // recompose:

 // libs:
// device sizes:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "64px",
    lineHeight: "64px",
    paddingLeft: "1%",
    fontSize: "14px"
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_6__["device"].tablet]: {
    root: {
      height: "150px",
      lineHeight: "150px",
      fontSize: "20px"
    }
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_6__["device"].laptop]: {
    root: {}
  },
  highlighted: {
    backgroundColor: "#FAFAD2AA"
  },
  songName: {// height: "70px",
  },
  // icon: {
  // 	width: "150px",
  // },
  // songUpvotes: {
  // 	width: "30px",
  // 	textAlign: "center",
  // },
  submitButton: {
    marginLeft: "auto",
    marginRight: "20px",
    marginTop: "auto",
    marginBottom: "auto"
  }
});

class Result extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleSubmitSong = this.handleSubmitSong.bind(this); // this.handleDownvote = this.handleDownvote.bind(this);

    this.state = {
      upvoteState: 0
    };
  }

  componentDidMount() {
    this.socket = this.props.serverConnection;
  }

  handleSubmitSong() {
    this.socket.emit("submitSong", {
      songData: this.props.songData
    }, data => {
      if (!data.success) {
        alert(data.reason);
      }
    });
    this.props.updateSongName("");
    this.props.updateSearchResults([]);
  }

  render() {
    const {
      classes
    } = this.props;
    let isMobile = window.innerWidth < 900;
    let image = this.props.songData.album.images[isMobile ? 2 : 1];
    let size = isMobile ? 64 : 150;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      className: classes.root,
      elevation: 10
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image.url,
      width: size,
      height: size
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.songName
    }, this.props.songData.songName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: classes.submitButton,
      onClick: this.handleSubmitSong,
      color: "primary",
      variant: "contained",
      size: "large"
    }, "Submit"));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateSongName: data => {
      dispatch(Object(dj_actions_songs_js__WEBPACK_IMPORTED_MODULE_4__["updateSongName"])(data));
    },
    updateSearchResults: data => {
      dispatch(Object(dj_actions_songs_js__WEBPACK_IMPORTED_MODULE_4__["updateSearchResults"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(Result));

/***/ }),

/***/ "./src/party/components/General/SearchResults.jsx":
/*!********************************************************!*\
  !*** ./src/party/components/General/SearchResults.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Result_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Result.jsx */ "./src/party/components/General/Result.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // import PropTypes from "prop-types";
// components:

 // material ui:


 // redux:

 // recompose:

 // jss:

const styles = theme => ({
  root: {
    // display: "flex",
    display: "grid",
    flexDirection: "column",
    gridGap: "10px",
    padding: "15px",
    overflowY: "scroll",
    height: "71vh"
  }
});

class SearchResults extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapSearchResults() {
    let results = [];

    for (let i = 0; i < this.props.searchResults.length; i++) {
      let result = this.props.searchResults[i];
      results.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: i,
        serverConnection: this.props.serverConnection,
        songData: { ...result
        }
      }));
    }

    return results;
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "searchResults",
      className: classes.root,
      elevation: 10
    }, this.mapSearchResults());
  }

}

const mapStateToProps = state => {
  return {
    searchResults: state.songs.searchResults
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps))(SearchResults));

/***/ }),

/***/ "./src/party/components/General/Song.jsx":
/*!***********************************************!*\
  !*** ./src/party/components/General/Song.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/constants/DeviceSizes.js */ "./src/main/constants/DeviceSizes.js");
// react:
 // material ui:



 // components:

 // redux:

 // recompose:

 // libs:

 // device sizes:

 // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    height: "64px",
    lineHeight: "64px",
    paddingLeft: "1%",
    fontSize: "14px"
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_8__["device"].tablet]: {
    root: {
      height: "150px",
      lineHeight: "150px",
      fontSize: "20px"
    }
  },
  [src_constants_DeviceSizes_js__WEBPACK_IMPORTED_MODULE_8__["device"].laptop]: {
    root: {}
  },
  highlighted: {
    backgroundColor: "#FAFAD2AA"
  },
  songName: {
    // height: "70px",
    display: "flex",
    flexDirection: "column",
    lineHeight: "38px",
    margin: "auto 0"
  },
  icon: {// width: "70px",
    // height: "70px",
  },
  songUpvotes: {
    // width: "30px",
    textAlign: "center",
    lineHeight: "48px"
  },
  upvoteArea: {
    display: "flex",
    flexDirection: "column"
  },
  songSuggester: {
    marginLeft: "auto",
    marginRight: "20px",
    fontSize: "15px"
  }
});

class Song extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
    this.upvoteState = 0;
  }

  componentDidMount() {} // shouldComponentUpdate(nextProps, nextState) {
  // }


  componentWillUnmount() {// this.setState({ upvoteState: 0 });
  }

  handleUpvote() {
    if (this.upvoteState === 1) {
      this.neutralVote();
      return;
    }

    this.props.serverConnection.emit("vote", {
      songName: this.props.songData.songName,
      type: "up"
    }, data => {
      if (data.success) {// this.upvoteState = 1;
      }
    });
  }

  handleDownvote() {
    if (this.upvoteState === -1) {
      this.neutralVote();
      return;
    }

    this.props.serverConnection.emit("vote", {
      songName: this.props.songData.songName,
      type: "down"
    }, data => {
      if (data.success) {// this.upvoteState = -1;
      }
    });
  }

  neutralVote() {
    this.props.serverConnection.emit("vote", {
      songName: this.props.songData.songName,
      type: "neutral"
    }, data => {
      if (data.success) {// this.upvoteState = 0;
      }
    });
  }

  render() {
    const {
      classes
    } = this.props;
    let votes = this.props.songData.votes;

    for (let i = 0; i < votes.length; i++) {
      let vote = votes[i];

      if (vote.username === this.props.username) {
        if (vote.type === "up") {
          this.upvoteState = 1;
        } else if (vote.type === "down") {
          this.upvoteState = -1;
        } else if (vote.type === "neutral") {
          this.upvoteState = 0;
        }

        break;
      }
    }

    let isMobile = window.innerWidth < 900;
    let image = this.props.songData.album.images[isMobile ? 2 : 1];
    let size = isMobile ? 64 : 150;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Paper"], {
      className: classes.root,
      elevation: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.upvoteArea
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
      variant: "contained",
      color: "primary",
      size: "medium",
      onClick: this.handleUpvote,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.icon, this.upvoteState === 1 && classes.highlighted)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_2___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.songUpvotes
    }, this.props.songData.upvotes), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
      variant: "contained",
      color: "secondary",
      size: "medium",
      onClick: this.handleDownvote,
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.icon, this.upvoteState === -1 && classes.highlighted)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_3___default.a, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: image.url,
      width: size,
      height: size
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: "20px"
      }
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.songName
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.songData.songName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, this.props.songData.album.artists[0].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classes.songSuggester
    }, "suggested by: ", this.props.songData.username));
  }

}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps))(Song));

/***/ }),

/***/ "./src/party/components/General/SongList.jsx":
/*!***************************************************!*\
  !*** ./src/party/components/General/SongList.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Song_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Song.jsx */ "./src/party/components/General/Song.jsx");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
// react:
 // import PropTypes from "prop-types";
// components:

 // material ui:


 // redux:

 // recompose:

 // libs:

 // jss:

const styles = theme => ({
  root: {
    // display: "flex",
    display: "grid",
    flexDirection: "column",
    gridGap: "10px"
  }
});

class SongList extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props); // this.handleClick = this.handleClick.bind(this);

    this.state = {};
  }

  handleClick(event) {}

  mapSongs() {
    let songs = [];

    for (let i = 0; i < this.props.songList.length; i++) {
      let song = this.props.songList[i];
      songs.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Song_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: i,
        serverConnection: this.props.serverConnection,
        username: this.props.username,
        songData: { ...song
        }
      }));
    }

    return songs;
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "songList",
      className: classes.root,
      elevation: 4
    }, this.mapSongs());
  }

}

const mapStateToProps = state => {
  return {
    songList: state.party.songs.songList
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps))(SongList));

/***/ }),

/***/ "./src/party/components/General/SongSubmitForm.jsx":
/*!*********************************************************!*\
  !*** ./src/party/components/General/SongSubmitForm.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var party_actions_songs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! party/actions/songs.js */ "./src/party/actions/songs.js");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
// react:
 // import PropTypes from "prop-types";
// components:
// import SearchResults from "./SearchResults.jsx";
// material ui:


 // redux:


 // recompose:

 // libs:
// import swal from "sweetalert2";
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.

function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};

  var later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  return function () {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }

    return result;
  };
}

let searchForSong = throttle((self, value) => {
  self.socket.emit("searchSong", {
    songName: value
  }, data => {
    self.props.updateSearchResults(data.searchResults);
  });
}, 500); // jss:

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    // marginBottom: "2%",
    minHeight: "14vh"
  },
  textField: {
    margin: "2%"
  }
});

class SongSubmitForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    this.socket = null;
    this.handleText = this.handleText.bind(this);
    this.state = {
      songName: "",
      searchResults: []
    };
  }

  componentDidMount() {
    this.socket = this.props.serverConnection;
  }

  handleText(event) {
    // this.setState({ songName: event.target.value });
    this.props.updateSongName(event.target.value); // don't bother if the string is empty:

    if (event.target.value === "") {
      this.props.updateSearchResults([]);
      return;
    } // this.socket.emit("searchSong", { songName: event.target.value }, (data) => {
    // 	// console.log(data.searchResults);
    // 	this.props.updateSearchResults(data.searchResults);
    // });


    searchForSong(this, event.target.value);
  }

  render() {
    const {
      classes
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
      id: "songSubmitForm",
      className: classes.root,
      elevation: 4
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      id: "outlined-name",
      label: "Enter a Song",
      className: classes.textField,
      value: this.props.songName,
      onChange: this.handleText,
      margin: "normal",
      variant: "outlined",
      fullWidth: true
    }));
  }

}

const mapStateToProps = state => {
  return {
    songName: state.party.songs.songName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSongName: data => {
      dispatch(Object(party_actions_songs_js__WEBPACK_IMPORTED_MODULE_4__["updateSongName"])(data));
    },
    updateSearchResults: data => {
      dispatch(Object(party_actions_songs_js__WEBPACK_IMPORTED_MODULE_4__["updateSearchResults"])(data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_5__["compose"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(styles), Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps))(SongSubmitForm));

/***/ }),

/***/ "./src/party/constants/DeviceSizes.js":
/*!********************************************!*\
  !*** ./src/party/constants/DeviceSizes.js ***!
  \********************************************/
/*! exports provided: size, device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "device", function() { return device; });
const size = {
  mobile: "600px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px"
};
const device = {
  mobile: `@media (min-width: ${size.mobile})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  desktop: `@media (min-width: ${size.desktop})`
};

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map