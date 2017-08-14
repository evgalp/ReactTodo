import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyB1nAUjsbo74Q0chS5Ub3vrmxZFXXOL5xA",
	authDomain: "todoapp-fa2fc.firebaseapp.com",
	databaseURL: "https://todoapp-fa2fc.firebaseio.com",
	projectId: "todoapp-fa2fc",
	storageBucket: "todoapp-fa2fc.appspot.com",
	messagingSenderId: "231080552"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app:{
		name: 'todo app',
		version: '1.0'
	},
	isRunning: true,
	user: {
		name: 'myName',
		age: 40
	},
	todos: {
		'asd': {
			text: 'cook'
		},
		'asde': {
			text: 'cook2'
		}
	}
});

var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push();

newNoteRef.set({
	text: 'ssss'
})

notesRef.on('child_added', function (snapshot) {
	console.log('child_added', snapshot.key, snapshot.val())
});

notesRef.on('child_changed', function (snapshot) {
	console.log('child_changed', snapshot.key, snapshot.val())
});

notesRef.on('child_removed', function (snapshot) {
	console.log('child_removed', snapshot.key, snapshot.val())
});

console.log('todo id ', newNoteRef.key);
