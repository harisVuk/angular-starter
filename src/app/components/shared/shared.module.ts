import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NavBarComponent } from './nav/nav.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        ErrorComponent,
        NavBarComponent,
        SideBarComponent,
        AppLayoutComponent,
        CardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule,
        ErrorComponent,
        NavBarComponent,
        SideBarComponent,
        AppLayoutComponent,
        CardComponent,
    ]
})
export class SharedModule {}
