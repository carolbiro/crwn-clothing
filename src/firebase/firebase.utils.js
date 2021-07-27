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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase