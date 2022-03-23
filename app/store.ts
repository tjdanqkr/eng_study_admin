import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  AnyAction,
  CombinedState,
} from "@reduxjs/toolkit";

import counterReducer, { CounterState } from "../features/counter/counterSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import logger from "redux-logger";

const reducer = (
  state: CombinedState<{ counter: CounterState }> | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    counter: counterReducer, // 여기에 추가
  })(state, action);
};

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default store;
