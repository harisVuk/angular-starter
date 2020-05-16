import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router, Route } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLoggedIn(state.url);
    }

    canLoad(route: Route): boolean {
        return this.checkLoggedIn(route.path);
    }

    checkLoggedIn(url: string): boolean {
       if (url.includes('auth')) {
            if (!this.authService.isAuthenticated) {
                return true;
            }
            this.router.navigateByUrl('/home');
            return false;
        } else {
            if (this.authService.isAuthenticated) {
                return true;
            }
            this.router.navigateByUrl('/auth/signin');
            return false;
        }
    }
}
