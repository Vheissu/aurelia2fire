declare const firebase: any;

export async function getFirebaseAuth() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            return user;
        } else {
          return null;
        }
      });
}