
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './master/master.component';
import { PagesModule } from './../pages/pages.module';




@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        MasterComponent],
    imports: [
        CommonModule,
        RouterModule,
        PagesModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        ],
})
export class LayoutModule { }
