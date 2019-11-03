import { delay, takeEvery, takeLatest, put, call, select } from 'redux-saga/effects';

export function* deletePost({type, value}) {
	let {id} = value
	let url = `https://choreninja.herokuapp.com/api/v1/job/${id}`;
	let token = yield select((state) => state.auth.token)
    console.log("going to call DELETE on " + url);
    try {
        //make http call to add post
        fetch(url, {
			method: "DELETE",
			headers: new Headers({
				'Authorization': `Bearer ${token}`, 
				'Content-Type': 'application/json'
			  }), 
        }).then(res=>{
            console.log(res);
            // fetchMyPost()
        }).catch(err=>{
            console.log(err)
        })
    }
    catch (error){
        console.log(error);
	}
	yield put({
		type: 'FETCH_MY_POST',
	})
}

export function* editPost({type, value}) {
	let {post,id} = value
	let url = `https://choreninja.herokuapp.com/api/v1/job/${id}`;
	let token = yield select((state) => state.auth.token)
    try {
        //make http call to add post
        fetch(url, {
            method: "PUT",
            body: JSON.stringify({ job: post }),
			headers: new Headers({
				'Authorization': `Bearer ${token}`, 
				'Content-Type': 'application/json'
			  }), 
        }).then(res=>{
            console.log(res);
            // fetchMyPost()
        }).catch(err=>{
            console.log(err)
        })
    }
    catch (error){
        console.log(error);
	}
	yield put({
		type: 'FETCH_MY_POST',
	})
}


export function* addPost({type, value}) {
	let {post} = value
	let token = yield select((state) => state.auth.token)
    try {
        //make http call to add post
        const posts = yield call(() => {
            return fetch("https://choreninja.herokuapp.com/api/v1/job", {
                method: "POST",
                body: JSON.stringify({
                    job: post
                }),
				headers: new Headers({
					'Authorization': `Bearer ${token}`, 
					'Content-Type': 'application/json'
				}), 
            }).then(res => res.json())
            .catch(err => {
                    console.log(err)
                })
        })
        yield put({
            type: 'FETCH_MY_POST',
        })
    }
    catch (error) {
        console.log(error);
    }
}

function* fetchAllPost() {
    try {
		//make http call to add post
		let token = yield select((state) => state.auth.token)
        const posts = yield call(()=>{
            return fetch(
                `https://choreninja.herokuapp.com/api/v1/job`,
                {
					method: "GET",
					headers: new Headers({
						'Authorization': `Bearer ${token}`, 
						'Content-Type': 'application/x-www-form-urlencoded'
					  }), 
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                })
        })
        console.log("posts", posts)
        yield put({
            type: 'RECIEVE_ALL_POST',
            value: posts
        })

    }
    catch (error){
        console.log(error);
    }
}

function* fetchMyPost() {
    try {
		//make http call to add post
		let user = yield select((state) => state.auth.user)
		let token = yield select((state) => state.auth.token)
        const posts = yield call(()=>{
            return fetch(
                `https://choreninja.herokuapp.com/api/v1/job?master_id=${user._id}`,
                {
					method: "GET",
					headers: new Headers({
						'Authorization': `Bearer ${token}`, 
						'Content-Type': 'application/x-www-form-urlencoded'
					  }), 
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                })
        })
        console.log("posts", posts)
        yield put({
            type: 'RECIEVE_MY_POST',
            value: posts
        })

    }
    catch (error){
        console.log(error);
    }
}

function* fetchMyJob() {
    try {
		//make http call to add post
		let user = yield select((state) => state.auth.user)
        const posts = yield call(()=>{
            return fetch(
                `https://choreninja.herokuapp.com/api/v1/job?ninja_id=${user._id}`,
                {
                    method: "GET",
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                })
        })
        console.log("posts", posts)
        yield put({
            type: 'RECIEVE_MY_JOB',
            value: posts
        })

    }
    catch (error){
        console.log(error);
    }
}


export function* watchPost (){
    //Take Latest action
    yield takeLatest("DELETE_POST", deletePost);
    yield takeLatest("ADD_POST", addPost);
    yield takeLatest("EDIT_POST", editPost);
    yield takeLatest("FETCH_MY_POST", fetchMyPost);
    yield takeLatest("FETCH_ALL_POST", fetchAllPost);
    yield takeLatest("FETCH_MY_JOB", fetchMyJob);
}
