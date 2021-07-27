import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComicsComponent } from './card-comics/card-comics.component';
import { ShowComicsComponent } from './show-comics/show-comics.component';



@NgModule({
    declarations: [
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        CardComicsComponent,
        ShowComicsComponent],
    imports: [
        CommonModule
    ],
    exports: [
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        ShowComicsComponent],
})
export class LayoutModule { }
