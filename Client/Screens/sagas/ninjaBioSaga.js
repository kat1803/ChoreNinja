import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';

export function* updateBio({ type, value }) {
    var url = "https://choreninja.herokuapp.com/api/v1/user";
    const res = yield call(() => {
        let reqBody = {
            username: value.email,
            password: value.password
        }
        return fetch(url, {
            method: "PUT",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
        }).then(res => res.json())
            .catch(err => {
                console.log(err)
            })
    })
    console.log(res)
    yield put({
        type: 'SAVE',
        value: res
    })
}

export function* watchNinjaBio() {
    //Take Latest action
    yield takeLatest("SAVE", updateBio);

}
