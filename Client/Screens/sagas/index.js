import { all, fork } from 'redux-saga/effects';

import  { watchPost } from './homescreenSaga';
import  { watchAuth } from './authSaga';


// Redux Saga: Root Saga
export function* rootSaga () {
    yield all([
      fork(watchPost),
      fork(watchAuth),
    ]);
  };