import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase.initializeApp({
  projectId: 'motivationpool-f0c5f',
  apiKey: 'AIzaSyCmf1TvJtZiZEVssEKGz9_iDvE6NGxfBwc'
}).firestore()
