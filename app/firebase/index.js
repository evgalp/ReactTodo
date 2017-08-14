import firebase from 'firebase';

try {
	var config = {
		apiKey: "AIzaSyB1nAUjsbo74Q0chS5Ub3vrmxZFXXOL5xA",
		authDomain: "todoapp-fa2fc.firebaseapp.com",
		databaseURL: "https://todoapp-fa2fc.firebaseio.com",
		projectId: "todoapp-fa2fc",
		storageBucket: "todoapp-fa2fc.appspot.com",
		messagingSenderId: "231080552"
	};
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;