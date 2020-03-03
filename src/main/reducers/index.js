import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import settings from "./settings.js";

// import client from "src/features/client.js";

import party from "../../party/reducers/index.js";
import dj from "../../dj/reducers/index.js";

const rootReducer = combineReducers({
	dj,
	party,
	settings,
	form,
});

export default rootReducer;
