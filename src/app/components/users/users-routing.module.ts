import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';
import { AuthGuard } from '../../guards/auth-guard.services';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'signin', component: SignInComponent, canActivate: [AuthGuard] },
            { path: 'signup', component: SignUpComponent, canActivate: [AuthGuard] }
        ])
    ],
    exports: [RouterModule]
})
export class UsersRoutingModule {}
