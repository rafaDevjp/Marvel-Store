import { ShowComicsComponent } from './layout/show-comics/show-comics.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';





const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'show-comics', component: ShowComicsComponent}

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
