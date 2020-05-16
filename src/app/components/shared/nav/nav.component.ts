import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'be-nav-bar',
    templateUrl: './nav.component.html'
})
export class NavBarComponent  {

    constructor(private authService: AuthService,
                private router: Router) { }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/auth/signin');
    }

}
