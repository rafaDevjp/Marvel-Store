import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowItemComponent } from './pages/show-item/show-item.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { EventsComponent } from './pages/events/events.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { CreatorsComponent } from './pages/creators/creators.component';
import { MasterComponent } from './layout/master/master.component';





const routes: Routes = [
  {
    path:'', 
    component: MasterComponent,
    children:[
      {path:'', component: CharactersComponent},
      {path:'pages/comics', component:ComicsComponent},
      {path:'pages/creators', component: CreatorsComponent},
      {path:'pages/events', component: EventsComponent},
      {path:'pages/stories', component: StoriesComponent},
      
    ]
  },
  {path:'showItem/:id', component: ShowItemComponent}
  

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
