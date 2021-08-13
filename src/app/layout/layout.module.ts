
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MasterPageComponent } from './master-page/master-page.component';





@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        MasterPageComponent,
       ],
    imports: [
        CommonModule,
        RouterModule,
       
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        ],
})
export class LayoutModule { }
