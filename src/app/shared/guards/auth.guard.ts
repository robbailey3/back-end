import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkLogin();
  }
  public checkLogin(): boolean {
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
