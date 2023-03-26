import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private _authService: AuthService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this._authService._authenticated) {  
      this.router.navigate(["login"]);
      return false;
    }

    return true;

  }
}
