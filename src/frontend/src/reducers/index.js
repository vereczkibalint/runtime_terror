import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // I want to use local storage as my default storage

import auth from "./authReducer";
import milestoneReducer from "./milestoneReducer";
import expenditureReducer from "./expenditureReducer";
import incomeReducer from "./incomeReducer";
import accountReducer from "./accountReducer";
import alertReducer from "./alertReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth,
  milestone: milestoneReducer,
  expenditure: expenditureReducer,
  income: incomeReducer,
  accounts: accountReducer,
  alerts: alertReducer,
});

export default persistReducer(persistConfig, rootReducer);
