import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';

function* deletePost(id) {
    try {
        //make http call to add post
        fetch("http://10.1.10.160:3000/api/v1/job", {
            method: "DELETE",
            body: id
        }).then(res=>{
            console.log(res);
            fetchPost()
        }).catch(err=>{
            console.log(err)
        })
    }
    catch (error){
        console.log(error);
    }
}

function* editPost(post) {
    try {
        //make http call to add post
        fetch("http://10.1.10.160:3000/api/v1/job", {
            method: "PUT",
            body: JSON.stringify(post)
        }).then(res=>{
            console.log(res);
            fetchPost()
        }).catch(err=>{
            console.log(err)
        })
    }
    catch (error){
        console.log(error);
    }
}


function* addPost(post) {
    try {
        //make http call to add post
        const posts = yield call(() => {
            return fetch("http://10.1.10.160:3000/api/v1/job", {
                method: "POST",
                body: JSON.stringify({
                    job: post.value
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .catch(err => {
                    console.log(err)
                })
        })
        yield put({
            type: 'FETCH_POST',
        })
    }
    catch (error) {
        console.log(error);
    }
}

function* fetchPost() {
    try {
        //make http call to add post
        const posts = yield call(()=>{
            return fetch(
                "http://10.1.10.160:3000/api/v1/job",
                {
                    method: "GET",
                })
                .then(res => res.json())
                .catch(err => {
                    console.log(err)
                })
        })
        yield put({
            type: 'RECIEVE_POST',
            value: posts
        })

    }
    catch (error){
        console.log(error);
    }
}


export function* watchDeletePost (){
    //Take Latest action
    yield takeLatest('DELETE_POST', deletePost);
    yield takeLatest("ADD_POST", addPost);
    yield takeLatest("EDIT_POST", editPost);
    yield takeLatest("FETCH_POST", fetchPost);
}