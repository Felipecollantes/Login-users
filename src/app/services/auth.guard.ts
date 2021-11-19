import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Method Guard if the user is not logged in will navigate to login
   * @returns if the user is logged in or not
   */
  canActivate(): Observable<boolean> {
    return this.authService.isAuth().pipe(
      tap(state => {
        if (!state) {
          this.router.navigate(['/login']);
        }
      })
    );
  }
}
