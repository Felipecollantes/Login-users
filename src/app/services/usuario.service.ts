import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = 'https://reqres.in/api';
  private perPage = 2;

  constructor(private http: HttpClient) {}

  /**
   * Method of the service that returns the reqres object
   * @param page the current page
   * @returns the object reqres
   */
  getUsers(page: number): Observable<any> {
    return this.http.get(`${this.url}/users?per_page=${this.perPage}&page=${page}`).pipe(
      map(resp => {
        return resp;
      })
    );
  }
}
