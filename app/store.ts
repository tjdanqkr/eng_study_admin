import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  AnyAction,
  CombinedState,
} from '@reduxjs/toolkit';

import counterReducer, { CounterState } from '../features/counter/counterSlice';
import authReducer, { InitialAuthState } from '../features/auth/authSlice';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import logger from 'redux-logger';
import categoryReducer, {
  CategoryInitialState,
} from '../features/category/categorySlice';
import questionReducer, {
  QuestionInitialState,
} from '../features/question/questionSlice';

const reducer = (
  state:
    | CombinedState<{
        counter: CounterState;
        auth: InitialAuthState;
        category: CategoryInitialState;
        question: QuestionInitialState;
      }>
    | undefined,
  action: AnyAction,
) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    counter: counterReducer, // 여기에 추가
    auth: authReducer,
    category: categoryReducer,
    question: questionReducer,
  })(state, action);
};

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
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
  debug: process.env.NODE_ENV !== 'production',
});

export default store;
