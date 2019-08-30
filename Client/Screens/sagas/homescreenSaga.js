import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

function* deletePost() {
    try {
        yield put({
            type: 'DELETE_POST_ASYNC',
            value: 1,
        })
    }
    catch (error){
        console.log(error);
    }
}

export function* watchDeletePost (){
    //Take Latest action
    yield takeLatest('DELETE_POST', deletePost);
}