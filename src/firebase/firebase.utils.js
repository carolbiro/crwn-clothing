import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAdtjtJHJqGPYj564QDpolfz9bczAfLrQc",
    authDomain: "crwn-db-e97b6.firebaseapp.com",
    projectId: "crwn-db-e97b6",
    storageBucket: "crwn-db-e97b6.appspot.com",
    messagingSenderId: "511665139174",
    appId: "1:511665139174:web:cb572c00a6fc18b231fa27",
    measurementId: "G-5EBRJPG7N4"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase