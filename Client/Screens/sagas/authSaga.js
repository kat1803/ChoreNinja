import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';

export function* signUp({type, value}) {
	var url = "https://choreninja.herokuapp.com/api/v1/auth/signup";
	yield call(() => {
		return fetch(url, {
			method: "POST",
			body: JSON.stringify({ username: value.email, password: value.password  }),
			headers: {
				'Content-Type': 'application/json',
				'accept': 'application/json'
			}
		}).then(res=>{
			console.log(res);
		}).catch(err=>{
			console.log(err)
		})
	})
}

export function* signIn({type, value}) {
	var url = "https://choreninja.herokuapp.com/api/v1/auth/signin";
	const res = yield call(() => {
		let reqBody = {
			username: value.email,
			password: value.password
		}
		console.log("email, password",value.email, value.password)
		console.log(reqBody)
		return fetch(url, {
			method: "POST",
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
		type: 'SIGNED_IN',
		value: res
	})
}


export function* signOut() {
	try {
		yield call(() => {
			return fetch("https://choreninja.herokuapp.com/api/v1/auth/signout", {
				method: "GET",
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => res.json())
			.catch(err => {
					console.log(err)
				})
		})
		yield put({
			type: 'SIGNED_OUT',
		})
	}
	catch (error) {
		console.log(error);
	}
}

export function* watchAuth (){
	//Take Latest action
	yield takeLatest("SIGN_UP", signUp);
	yield takeLatest("SIGN_IN", signIn);
	yield takeLatest("SIGN_OUT", signOut);
}
