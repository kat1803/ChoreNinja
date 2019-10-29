import { all, fork } from 'redux-saga/effects';

import  { watchPost } from './homescreenSaga';
import  { watchAuth } from './authSaga';
import { watchNinjaBio } from './ninjaBioSaga';


// Redux Saga: Root Saga
export function* rootSaga () {
    yield all([
      fork(watchPost),
      fork(watchAuth),
      fork(watchNinjaBio),
    ]);
  };