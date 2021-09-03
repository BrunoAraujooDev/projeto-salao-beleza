// importação dos reduces
import { applyMiddleware, combineReducers, createStore } from "redux";
import ServicoReducer from "./servico/reducer.js";
import authReducer from "./auth/reducer.js";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  servico: ServicoReducer,
  auth: authReducer
});

// midlewares de redux
const middlewares = [thunk];

// composicao que junta middlewares + ferramentas (devtools)
const compose = composeWithDevTools(applyMiddleware(...middlewares));

// criar store
const store = createStore(reducers, compose);

export default store;
