import firebase from 'firebase';

import config from './firebaseSetting.json'
class Firebase {
    constructor() {
        if (!firebase.apps.length) { //avoid re-initializing
            firebase.initializeApp(config);
        }
        this.conversationID = {}
        this.user = {}
    }

    get ref() {
        return firebase.database().ref('Messages/' + this.conversationID.id);
	}

	get refNotification() {
        return firebase.database().ref('Notifications/' + this.user._id);
	}
	
	createConversation = ( conID, ninjaId) =>{
		let ref = firebase.database().ref(`Messages/${conID}`);
		ref.push({
			createdAt: this.current_time,
			text: "Hi! I would like to take the job!",
			user: {
				_id: ninjaId
			}
		})
	}

	createNotification = ( job , masterId, ninjaId) =>{
		let ref = firebase.database().ref(`Notifications/${masterId}`);
		ref.push({
			createdAt: this.current_time,
			text: `Congratualation! Your ${job.name} have been accepted by a ninja!`,
		})
		let ref2 = firebase.database().ref(`Notifications/${ninjaId}`);
		ref2.push({
			createdAt: this.current_time,
			text: `Congratualation! You have became ninja for ${job.name}!`,
		})
	}

    setConversation = (conversationID) => {
        this.conversationID = conversationID
    }

	setUser = (user) => {
        this.user = user
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
    refNotificationOn = callback => {
        this.refNotification
            .limitToLast(20)
            .on('child_added', snapshot => callback(snapshot.val()));
    }
    refNotificationOff() {
        this.refNotification.off();
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

}
export default new Firebase();