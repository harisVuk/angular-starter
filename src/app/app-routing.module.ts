import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './components/shared/layout/app.layout.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth-guard.services';

const appRoutes: Routes = [
    {
        path: '',
        component: AppLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'news', loadChildren: './components/news/news.module#NewsModule' }
        ]
    },
    { path: 'auth', loadChildren: './components/users/users.module#UsersModule' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
