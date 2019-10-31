import firebase from 'firebase';

import config from './firebaseSetting.json'
class Firebase {
    constructor() {
        if (!firebase.apps.length) { //avoid re-initializing
            firebase.initializeApp(config);
        }
        this.conversationID = ""
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get ref() {
        // return firebase.database().ref('Messages');
        return firebase.database().ref('Messages/' + this.conversationID);
    }

    setConversation = (conversationID) => {
        this.conversationID = conversationID
    }
    
    get current_time() {
        return new Date().getTime();
    }
    refOn = callback => {
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));
    }
    refOff() {
        this.ref.off();
    }
    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = { _id, timestamp, text, user };
        return message;
    };
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = { text, user, createdAt: this.current_time, };
            this.ref.push(message);
        }
    };
    // login = async (user, success_callback, failed_callback) => {
    //     await firebase.auth()
    //         .signInWithEmailAndPassword(user.email, user.password)
    //         .then(success_callback, failed_callback);
    // }
}
export default new Firebase();