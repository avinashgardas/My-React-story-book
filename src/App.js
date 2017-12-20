import React, {Component} from 'react';
//components
import Home from './Components/Home'
import firebase from 'firebase';

// epicbase - Firebase
var config = {
    apiKey: "AIzaSyC_tMg6gBl-9OoCiBXdgIzgdQUBDbqveJw",
    authDomain: "epicbase-7a998.firebaseapp.com",
    databaseURL: "https://epicbase-7a998.firebaseio.com",
    projectId: "epicbase-7a998",
    storageBucket: "epicbase-7a998.appspot.com",
    messagingSenderId: "293875711343"
  };
firebase.initializeApp(config);

// ODM Android app prod - Firebase
// var config = {
//     apiKey: "AIzaSyAYx5db0o2dvdJ502k1z3EOFMrUER3ilZ4",
//     authDomain: "odm-android-app-eb43e.firebaseapp.com",
//     databaseURL: "https://odm-android-app-eb43e.firebaseio.com",
//     projectId: "odm-android-app-eb43e",
//     storageBucket: "odm-android-app-eb43e.appspot.com",
//     messagingSenderId: "306231514599"
//   };
//   firebase.initializeApp(config);

class App extends Component {
    render() {
        return(
            <div>
                <div style={{padding: 8, textAlign: 'center'}}>
                    My React story book
                </div>
                <hr/>

                <Home />
            </div>
        )
    }
}
export default App;