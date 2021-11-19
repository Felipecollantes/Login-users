import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  /**
   * Method to create the user
   * @param email the email
   * @param password the password
   * @returns create user
   */
  createUser(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Method to login the user
   * @param email the email
   * @param password the password
   * @returns login user
   */
  loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Method to logout the user
   * @returns the logout user
   */
  logOut() {
    return this.auth.signOut();
  }

  /**
   * Method that checks the user login
   */
  initAuthListener() {
    this.auth.authState.subscribe(resp => {
      console.log('Usuario Logeado', resp);
    });
  }

  isAuth() {
    return this.auth.authState.pipe(map(resp => resp != null));
  }
}
