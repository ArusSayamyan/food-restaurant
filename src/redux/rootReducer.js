  
import { combineReducers } from "redux";

// import { persistReducer } from "redux-persist";

// import { authPersistConfig, shopPersistConfig } from "./persist.config";

// REDUCERS

import Reducer from "./reducer";


const rootReducer = combineReducers({
    // auth: persistReducer(authPersistConfig, authReducer),
    common: Reducer,
    // shop: persistReducer(shopPersistConfig, shopReducer),
});

export default rootReducer;