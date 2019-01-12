import * as firebase from 'firebase';

export class AuthService {
    token: string;

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(
            error => alert(error)
        );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            () => {
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token: string) => this.token = token
                );
            }
        );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    // This doesn't work properly! Just sets the token state?
    isAuthenticated() {
        return this.token != null;
    }
}
