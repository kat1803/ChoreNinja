import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';

export function* signUp({type, value}) {
	var url = "https://choreninja.herokuapp.com/api/v1/auth/signup";
	yield call(() => {
		return fetch(url, {
			method: "POST",
			body: JSON.stringify({username: value.email, password: value.password}),
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
// export function* signInGoogle({type, value}) {
// 	// authUrl = `https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=666930515664-hvp8g92lfq05dqhsrskot1efffjj8mti.apps.googleusercontent.com&as=xrd2C_sqxAqWEA-J1zXxXA&destination=https%3A%2F%2Fchoreninja.herokuapp.com&approval_state=!ChR5c3NPdlM5Rmw0a05KVVVCYThzYRIfMDFjc1JGRXo2WDhaa013TWpqbVNUV1ZDRnhxUzRoWQ%E2%88%99AJDr988AAAAAXb4GJDMXVsRGxhFhuObM6yHCpSqvc6jG&oauthgdpr=1&xsrfsig=ChkAeAh8T9XSi0pbpQStH_Ou6QaTI-pDPA5LEg5hcHByb3ZhbF9zdGF0ZRILZGVzdGluYXRpb24SBXNvYWN1Eg9vYXV0aHJpc2t5c2NvcGU&flowName=GeneralOAuthFlow`
// 	authUrl = `https://choreninja.herokuapp.com/api/v1/auth/google`
// 	// var url = "https://choreninja.herokuapp.com/api/v1/auth/google";
// 	const res = yield call(() => {
// 		return fetch(authUrl, {
// 			method: "GET",
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'accept': 'application/json'
// 			}
// 		}).then(res => res.json())
// 		.catch(err => {
// 			console.log(err)
// 		})
// 	})
// 	console.log(res)
// 	yield put({
// 		type: 'SIGNED_IN',
// 		value: res
// 	})
// }


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
	// yield takeLatest("SIGN_IN_GOOGLE", signInGoogle);
	yield takeLatest("SIGN_OUT", signOut);
}
