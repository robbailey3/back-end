import { AuthService } from 'src/app/login/auth.service';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin();
  }
  checkLogin(): boolean {
    if (!this.authService.tokenIsValid()) {
      // If the current token is not valid, try getting a new one.
      this.authService.refreshToken();
      if (!this.authService.tokenIsValid()) {
        // If it is still invalid, that means the token wasn't refreshed.
        this.router.navigate(['login']);
        return false;
      }
      return false;
    }
    return true;
  }
}
