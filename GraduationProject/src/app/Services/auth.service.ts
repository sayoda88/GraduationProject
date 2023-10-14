import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, retry, catchError, throwError } from 'rxjs';
import { UserData } from 'src/app/models/userData';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public _HttpClient: HttpClient) { }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }





  //userToken = new BehaviorSubject(null);
 // userRole = new BehaviorSubject(null);

  signup(formData: any): Observable<any> {
    return this._HttpClient.post('https://mazen.cyclic.app/auth/signUp', formData)
  }

  login(data: any): Observable<any> {
    return this._HttpClient.post('https://mazen.cyclic.app/auth/login', data)
    // .pipe(
    //   retry(1), //try send request 1 time
    //   catchError(()=>{
    //     return throwError(()=>'Validation error , Login again')
    //   })
    // );
  }
  // saveUserData(token: any, role: any) {
  //   let user = new UserData(token, role);
  //  // this.userToken.next(user.token);
  //  // this.userRole.next(user.role);

  // }

}
