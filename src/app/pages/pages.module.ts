
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { CreatorsComponent } from './creators/creators.component';
import { EventsComponent } from './events/events.component';
import { StoriesComponent } from './stories/stories.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    StoriesComponent,
    ShowItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    CharactersComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    StoriesComponent,
    ShowItemComponent
  ],
})
export class PagesModule { }
