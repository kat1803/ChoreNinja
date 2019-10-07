import { delay, takeEvery, takeLatest, put, call } from 'redux-saga/effects';

export function deletePost(id) {
    var url = "https://choreninja.herokuapp.com/api/v1/job/" + id;
    console.log("going to call DELETE on " + url);
    try {
        //make http call to add post
        fetch(url, {
            method: "DELETE",
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

export function editPost(post, id) {
    console.log("hihi");
    var url = "https://choreninja.herokuapp.com/api/v1/job/" + id;
    console.log("going to call PUT on " + url);
    console.log(post);
    console.log(post.value);
    var jsonVal = JSON.stringify({
                    job: post
		}
                );
    console.log(jsonVal);
    try {
        //make http call to add post
        fetch(url, {
            method: "PUT",
            body: jsonVal,
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            }
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


export function* addPost(post) {
    console.log("ADDING POST ", post);
    try {
        //make http call to add post
        const posts = yield call(() => {
            return fetch("https://choreninja.herokuapp.com/api/v1/job", {
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
                "https://choreninja.herokuapp.com/api/v1/job",
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
    //yield takeLatest('DELETE_POST', deletePost);
    yield takeLatest("ADD_POST", addPost);
    yield takeLatest("EDIT_POST", editPost);
    yield takeLatest("FETCH_POST", fetchPost);
}
