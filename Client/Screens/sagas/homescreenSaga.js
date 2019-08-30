import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';

function* deletePost(id) {
    try {
        //make http call to add post
        fetch({
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
        fetch({
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
        fetch({
            method: "POST",
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

function* fetchPost() {
    try {
        //make http call to add post
        fetch({
            method: "GET",
        }).then(res=>{
            console.log(res);
            put({
                type: 'RECIEVE_POST',
                value: res
            })
        }).catch(err=>{
            console.log(err)
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
}