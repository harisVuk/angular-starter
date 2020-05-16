import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { AuthGuard } from '../../guards/auth-guard.services';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
              canActivate: [AuthGuard],
              path: '',
              component: NewsComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class NewsRoutingModule {}
