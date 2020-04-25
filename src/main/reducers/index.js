import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

// import client from "src/features/client.js";

// import party from "src/party/reducers/index.js";
// import dj from "src/dj/reducers/index.js";
import party from "../../dj/reducers/index.js";
import dj from "../../dj/reducers/index.js";
import settings from "../../main/features/settings.js";

const rootReducer = combineReducers({
	dj,
	party,
	settings,
	form,
});

export default rootReducer;
